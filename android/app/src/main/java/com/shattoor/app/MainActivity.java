package com.shattoor.app;

import android.Manifest;
import android.app.Activity;
import android.app.NotificationManager;
import android.content.ContentValues;
import android.content.Context;
import android.content.pm.PackageManager;
import android.os.Build;
import android.provider.MediaStore;
import android.speech.tts.TextToSpeech;
import android.util.Base64;
import android.webkit.JavascriptInterface;
import java.io.OutputStream;
import java.util.Locale;
import android.content.ActivityNotFoundException;
import android.content.Intent;
import android.graphics.Color;
import android.net.Uri;
import android.os.Bundle;
import android.view.Gravity;
import android.view.View;
import android.webkit.WebResourceError;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.FrameLayout;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.ProgressBar;
import android.widget.TextView;
import android.widget.Toast;

// تطبيق شطّور: يفتح التطبيق نفسه المنشور على الموقع، فأي تحديث يصل للجميع فوراً
public class MainActivity extends Activity {
    static final String HOME = "https://mohamedfayzyasenalsabagh-create.github.io/shattoor/";
    static final String HOST = "mohamedfayzyasenalsabagh-create.github.io";
    static final int NOTIF_REQ = 9;
    WebView web;
    View splash;
    TextToSpeech tts;
    boolean ttsReady;

    @Override
    protected void onCreate(Bundle b) {
        super.onCreate(b);
        web = new WebView(this);
        web.setBackgroundColor(Color.parseColor("#E6F3F1"));
        FrameLayout root = new FrameLayout(this);
        root.addView(web);
        splash = buildSplash();
        root.addView(splash);
        setContentView(root);

        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setDatabaseEnabled(true);
        s.setAllowFileAccess(false);
        s.setCacheMode(WebSettings.LOAD_DEFAULT);
        s.setMediaPlaybackRequiresUserGesture(false);
        s.setTextZoom(100);
        s.setUserAgentString(s.getUserAgentString() + " ShattoorApp/2");
        web.addJavascriptInterface(new Bridge(), "ShattoorNative");
        tts = new TextToSpeech(this, st -> ttsReady = st == TextToSpeech.SUCCESS);

        web.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView v, WebResourceRequest r) {
                Uri u = r.getUrl();
                if (HOST.equals(u.getHost())) return false;
                openExternal(u);
                return true;
            }
            @Override
            public void onPageFinished(WebView v, String url) { hideSplash(); }
            @Override
            public void onReceivedError(WebView v, WebResourceRequest r, WebResourceError e) {
                if (r.isForMainFrame()) {
                    hideSplash();
                    v.loadDataWithBaseURL(null, "<html dir='rtl'><head><meta name='viewport' content='width=device-width,initial-scale=1'></head>"
                        + "<body style='font-family:sans-serif;text-align:center;padding:40px 20px;color:#15283A;background:#E6F3F1'>"
                        + "<h2 style='color:#0E7C77'>لا يوجد اتصال بالإنترنت</h2><p>تحقق من الاتصال وحاول مرة ثانية.</p>"
                        + "<button style='padding:14px 28px;border-radius:14px;border:0;background:#0E7C77;color:#fff;font-size:17px' onclick=\"location.href='" + HOME + "'\">إعادة المحاولة</button></body></html>",
                        "text/html", "UTF-8", null);
                }
            }
        });

        if (b != null) web.restoreState(b); else web.loadUrl(HOME);
        web.postDelayed(this::hideSplash, 8000);
    }

    void openExternal(Uri u) {
        try {
            startActivity(new Intent(Intent.ACTION_VIEW, u));
        } catch (ActivityNotFoundException e) {
            Toast.makeText(this, "لا يوجد تطبيق لفتح هذا الرابط", Toast.LENGTH_SHORT).show();
        }
    }

    View buildSplash() {
        LinearLayout l = new LinearLayout(this);
        l.setOrientation(LinearLayout.VERTICAL);
        l.setGravity(Gravity.CENTER);
        l.setBackgroundColor(Color.parseColor("#0E7C77"));
        ImageView ic = new ImageView(this);
        ic.setImageResource(R.mipmap.ic_launcher);
        int sz = (int) (96 * getResources().getDisplayMetrics().density);
        l.addView(ic, new LinearLayout.LayoutParams(sz, sz));
        TextView t = new TextView(this);
        t.setText("شطّور");
        t.setTextColor(Color.WHITE);
        t.setTextSize(30);
        t.setGravity(Gravity.CENTER);
        t.setPadding(0, 24, 0, 24);
        l.addView(t);
        l.addView(new ProgressBar(this));
        return l;
    }

    void hideSplash() {
        if (splash == null || splash.getVisibility() == View.GONE) return;
        splash.animate().alpha(0f).setDuration(250).withEndAction(() -> splash.setVisibility(View.GONE)).start();
    }

    // يحفظ صورة (data URL) في معرض الصور ويرجع رابطها
    Uri saveToGallery(String dataUrl, String name) throws Exception {
        String b64 = dataUrl.substring(dataUrl.indexOf(',') + 1);
        byte[] bytes = Base64.decode(b64, Base64.DEFAULT);
        ContentValues v = new ContentValues();
        v.put(MediaStore.Images.Media.DISPLAY_NAME, name + "-" + System.currentTimeMillis() + ".png");
        v.put(MediaStore.Images.Media.MIME_TYPE, "image/png");
        if (Build.VERSION.SDK_INT >= 29) v.put(MediaStore.Images.Media.RELATIVE_PATH, "Pictures/Shattoor");
        Uri u = getContentResolver().insert(MediaStore.Images.Media.EXTERNAL_CONTENT_URI, v);
        try (OutputStream os = getContentResolver().openOutputStream(u)) { os.write(bytes); }
        return u;
    }

    String notifyState() {
        if (Build.VERSION.SDK_INT >= 33 && checkSelfPermission(Manifest.permission.POST_NOTIFICATIONS) != PackageManager.PERMISSION_GRANTED)
            return "default";
        NotificationManager nm = (NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE);
        return nm.areNotificationsEnabled() ? "granted" : "denied";
    }

    @Override
    public void onRequestPermissionsResult(int req, String[] perms, int[] res) {
        super.onRequestPermissionsResult(req, perms, res);
        if (req == NOTIF_REQ) web.evaluateJavascript("window.__notifyChanged && window.__notifyChanged()", null);
    }

    class Bridge {
        @JavascriptInterface
        public boolean canSpeak() { return ttsReady; }
        @JavascriptInterface
        public void speak(final String text, final String lang) {
            runOnUiThread(() -> {
                if (!ttsReady) { Toast.makeText(MainActivity.this, "القراءة الصوتية غير جاهزة على هذا الموبايل", Toast.LENGTH_SHORT).show(); return; }
                Locale l = "en".equals(lang) ? Locale.US : new Locale("ar");
                int r = tts.setLanguage(l);
                if (r == TextToSpeech.LANG_MISSING_DATA || r == TextToSpeech.LANG_NOT_SUPPORTED) {
                    Toast.makeText(MainActivity.this, "ثبّت اللغة العربية بإعدادات تحويل النص إلى كلام", Toast.LENGTH_LONG).show();
                    return;
                }
                tts.setSpeechRate(0.85f);
                tts.speak(text, TextToSpeech.QUEUE_FLUSH, null, "q");
            });
        }
        @JavascriptInterface
        public void stopSpeak() { runOnUiThread(() -> { if (tts != null) tts.stop(); }); }
        @JavascriptInterface
        public void setDailyReminder(boolean on, int hour, int minute) { DailyReminder.set(getApplicationContext(), on, hour, minute); }
        @JavascriptInterface
        public String notifyState() { return MainActivity.this.notifyState(); }
        @JavascriptInterface
        public void requestNotify() {
            runOnUiThread(() -> {
                if (Build.VERSION.SDK_INT >= 33) requestPermissions(new String[]{Manifest.permission.POST_NOTIFICATIONS}, NOTIF_REQ);
                else web.evaluateJavascript("window.__notifyChanged && window.__notifyChanged()", null);
            });
        }
        @JavascriptInterface
        public void saveImage(final String dataUrl, final String name) {
            runOnUiThread(() -> {
                try { saveToGallery(dataUrl, name); Toast.makeText(MainActivity.this, "انحفظت الصورة بالمعرض", Toast.LENGTH_SHORT).show(); }
                catch (Exception e) { Toast.makeText(MainActivity.this, "ما قدرنا نحفظ الصورة", Toast.LENGTH_SHORT).show(); }
            });
        }
        @JavascriptInterface
        public void shareImage(final String dataUrl, final String name, final String text) {
            runOnUiThread(() -> {
                try {
                    Uri u = saveToGallery(dataUrl, name);
                    Intent i = new Intent(Intent.ACTION_SEND);
                    i.setType("image/png");
                    i.putExtra(Intent.EXTRA_STREAM, u);
                    i.putExtra(Intent.EXTRA_TEXT, text);
                    i.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);
                    startActivity(Intent.createChooser(i, "مشاركة"));
                } catch (Exception e) { Toast.makeText(MainActivity.this, "ما قدرنا نشارك الصورة", Toast.LENGTH_SHORT).show(); }
            });
        }
    }

    @Override
    protected void onDestroy() {
        if (tts != null) tts.shutdown();
        super.onDestroy();
    }

    @Override
    protected void onSaveInstanceState(Bundle o) { super.onSaveInstanceState(o); web.saveState(o); }

    @Override
    public void onBackPressed() {
        if (web.canGoBack()) web.goBack(); else super.onBackPressed();
    }
}
