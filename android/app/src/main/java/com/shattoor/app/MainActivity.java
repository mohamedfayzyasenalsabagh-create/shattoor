package com.shattoor.app;

import android.app.Activity;
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
    WebView web;
    View splash;

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
        s.setUserAgentString(s.getUserAgentString() + " ShattoorApp/1");

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

    @Override
    protected void onSaveInstanceState(Bundle o) { super.onSaveInstanceState(o); web.saveState(o); }

    @Override
    public void onBackPressed() {
        if (web.canGoBack()) web.goBack(); else super.onBackPressed();
    }
}
