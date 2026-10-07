#!/bin/bash
# يبني ملف APK من app/index.html بدون Android Studio
# الاستخدام: npm install && bash build-tools/build.sh <versionCode> <versionName>
# يحتاج: Java 11+ و Node 18+ و Python 3، ومفتاح التوقيع في keys/key.pem و keys/cert.pem
set -e
cd "$(dirname "$0")/.."
export JAVA_TOOL_OPTIONS=
VC=${1:-1}; VN=${2:-0.1}
A=node_modules/aaptjs3/bin/x64/linux/aapt2; chmod +x $A
OUT=build; rm -rf $OUT; mkdir -p $OUT/assets/fonts
if [ ! -f keys/key.pem ]; then echo "keys/key.pem غير موجود: ضع مفتاح التوقيع أولاً"; exit 1; fi
# 1) classes.dex من ملفات smali
java -cp "$(ls build-tools/smali/*.jar | tr '\n' ':')" \
  com.android.tools.smali.smali.Main assemble -a 21 -o $OUT/classes.dex android/smali
# 2) الصفحة + الخطوط محلياً (يشتغل بدون إنترنت)
F=node_modules/@fontsource
cp $F/tajawal/files/tajawal-{arabic,latin}-{400,500,700,800}-normal.woff2 $OUT/assets/fonts/
cp $F/lalezar/files/lalezar-{arabic,latin}-400-normal.woff2 $OUT/assets/fonts/
python3 build-tools/make_page.py app/index.html $OUT/assets
# 3) الموارد والمانيفست
$A compile --dir android/res -o $OUT/res.zip
$A link -I build-tools/framework-stub/android.jar --manifest android/AndroidManifest.xml --min-sdk-version 21 --target-sdk-version 34 --version-code $VC --version-name $VN -A $OUT/assets -o $OUT/base.apk $OUT/res.zip
# 4) تجميع وترصيف وتوقيع
python3 build-tools/pack.py $OUT/base.apk $OUT/classes.dex $OUT/unsigned.apk
mkdir -p dist
node build-tools/sign.mjs $OUT/unsigned.apk dist/shattoor-$VN.apk
