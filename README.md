# CCloud Web - Full (React + TypeScript + Tailwind)

این پروژه یک نسخهٔ وب از اپ CCloud هست که از API سایت CinemaPlus استفاده می‌کند.
ویژگی‌ها:
- React + TypeScript + Vite
- TailwindCSS با پشتیبانی تم تیره/روشن (toggle)
- Axios برای ارتباط با API
- صفحات: Home, Movies (Top), Series, Search, Details

## اجرا (local)
1. Node.js 18+ نصب کن.
2. در پوشه پروژه:
   ```bash
   npm install
   npm run dev
   ```
3. باز کن: `http://localhost:5173`

## دیپلوی
پیشنهاد: Vercel (فقط پوشه رو از گیت‌هاب deploy کن) یا GitHub Pages (اسکریپت deploy در package.json موجود است).

## توجه
- این پروژه فقط frontend است و داده‌ها از `https://cinemaplus-app.vercel.app/api` خوانده می‌شوند.
- اگر خواستی من این repo را روی گیت‌هاب ایجاد و push کنم (با تو کنفیگ دسترسی)، کمک می‌کنم.
