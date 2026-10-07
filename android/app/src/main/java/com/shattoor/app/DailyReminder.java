package com.shattoor.app;

import android.app.AlarmManager;
import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Build;
import java.util.Calendar;

// التذكير اليومي بتحدي اليوم: يُجدول على الموبايل نفسه فيعمل حتى لو كان التطبيق مغلقاً
public class DailyReminder extends BroadcastReceiver {
    static final String PREFS = "shattoor_reminder";
    static final String CHANNEL = "daily";

    static PendingIntent pending(Context c) {
        Intent i = new Intent(c, DailyReminder.class);
        i.setAction("com.shattoor.app.DAILY");
        return PendingIntent.getBroadcast(c, 1, i, PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE);
    }

    static void set(Context c, boolean on, int hour, int minute) {
        c.getSharedPreferences(PREFS, Context.MODE_PRIVATE).edit()
            .putBoolean("on", on).putInt("h", hour).putInt("m", minute).apply();
        schedule(c);
    }

    static void schedule(Context c) {
        AlarmManager am = (AlarmManager) c.getSystemService(Context.ALARM_SERVICE);
        SharedPreferences sp = c.getSharedPreferences(PREFS, Context.MODE_PRIVATE);
        am.cancel(pending(c));
        if (!sp.getBoolean("on", false)) return;
        Calendar t = Calendar.getInstance();
        t.set(Calendar.HOUR_OF_DAY, sp.getInt("h", 17));
        t.set(Calendar.MINUTE, sp.getInt("m", 0));
        t.set(Calendar.SECOND, 0);
        if (t.getTimeInMillis() <= System.currentTimeMillis()) t.add(Calendar.DAY_OF_MONTH, 1);
        am.setInexactRepeating(AlarmManager.RTC_WAKEUP, t.getTimeInMillis(), AlarmManager.INTERVAL_DAY, pending(c));
    }

    @Override
    public void onReceive(Context c, Intent intent) {
        String a = intent.getAction();
        if (Intent.ACTION_BOOT_COMPLETED.equals(a) || "android.intent.action.MY_PACKAGE_REPLACED".equals(a)) {
            schedule(c);
            return;
        }
        NotificationManager nm = (NotificationManager) c.getSystemService(Context.NOTIFICATION_SERVICE);
        if (Build.VERSION.SDK_INT >= 26 && nm.getNotificationChannel(CHANNEL) == null) {
            nm.createNotificationChannel(new NotificationChannel(CHANNEL, "تذكير تحدي اليوم", NotificationManager.IMPORTANCE_DEFAULT));
        }
        Intent open = new Intent(c, MainActivity.class);
        open.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TOP);
        PendingIntent pi = PendingIntent.getActivity(c, 0, open, PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE);
        Notification.Builder nb = Build.VERSION.SDK_INT >= 26 ? new Notification.Builder(c, CHANNEL) : new Notification.Builder(c);
        nb.setSmallIcon(R.drawable.ic_stat)
          .setColor(0xFF0E7C77)
          .setContentTitle("تحدّي اليوم جاهز 🌼")
          .setContentText("٥ أسئلة جديدة وحديث اليوم بانتظارك")
          .setAutoCancel(true)
          .setContentIntent(pi);
        try { nm.notify(1, nb.build()); } catch (SecurityException ignored) {}
    }
}
