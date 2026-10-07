import fs from 'fs';
import { ApkSigner, SigningKey } from 'apk_sign_ts';
const [,,inp,outp]=process.argv;
const key=SigningKey.fromPEM(fs.readFileSync('keys/key.pem','utf8'),fs.readFileSync('keys/cert.pem','utf8'));
const r=await new ApkSigner({signingKey:key}).sign(new Uint8Array(fs.readFileSync(inp)));
fs.writeFileSync(outp,r.signedApk); console.log('signed',outp,r.signedApk.length);
