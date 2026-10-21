# खाटू श्याम जी — SEO steps

The site already has titles, descriptions, keywords, a sitemap, and `robots.txt` for [https://www.khatushyamswamani.com](https://www.khatushyamswamani.com). Google will not see them until this code is deployed and the site is added in Google Search Console.

## 1. Put the site live

1. Push this project to the Git repo connected to Vercel.
2. In Vercel, open the project → **Settings** → **Environment Variables**.
3. Add:

   `NEXT_PUBLIC_SITE_URL` = `https://www.khatushyamswamani.com`

   Do not put a slash at the end.
4. Redeploy. Wait until the deployment is **Ready**.
5. In Vercel → **Settings** → **Domains**, keep `www.khatushyamswamani.com` as the main domain. Redirect `khatushyamswamani.com` (without www) to the www address.

Check these two links in a browser. Both should open:

- https://www.khatushyamswamani.com/sitemap.xml
- https://www.khatushyamswamani.com/robots.txt

## 2. Google account — Search Console

Use the Google account that should own this site (Gmail is enough).

1. Open [Google Search Console](https://search.google.com/search-console).
2. Click **Add property**.
3. Choose **URL prefix** and enter exactly:

   `https://www.khatushyamswamani.com`

4. Verify the site. The simplest method on Vercel is **DNS**:
   - Google shows a TXT record.
   - Add that TXT record where the domain was bought (GoDaddy, Namecheap, Google Domains, or wherever `khatushyamswamani.com` is registered).
   - Back in Search Console, click **Verify**. DNS can take a few minutes to a few hours.
5. After it says verified, open **Sitemaps** in the left menu.
6. Submit:

   `sitemap.xml`

7. Open **URL inspection**, paste each link below, and click **Request indexing**:
   - `https://www.khatushyamswamani.com/`
   - `https://www.khatushyamswamani.com/darshan-timings`
   - `https://www.khatushyamswamani.com/swamani`
   - `https://www.khatushyamswamani.com/prasad-puja`
   - `https://www.khatushyamswamani.com/travel-guide`
   - `https://www.khatushyamswamani.com/festivals`

Indexing is not instant. Google often takes a few days, sometimes longer.

## 3. What not to change in Google

- Do not add a second property for `shayam-baba.vercel.app` if the real site is the custom domain.
- Do not buy keyword packs or “guaranteed ranking” services inside a Google account. Search Console only lets you submit the sitemap and ask Google to recrawl.
- Keywords are already in each page’s title and description in this project. Editing them again inside Google is not required.

## 4. After it is indexed

In Search Console, check **Pages** and **Performance** once a week. **Pages** shows what Google indexed. **Performance** shows which words people used to find the site.

## 5. Google Ads

The site loads the Google Ads tag on every public page. A conversion is sent only after a paid booking, with the amount in INR. Nothing is sent until these two values are set.

1. Open [Google Ads](https://ads.google.com) with the same Google account and create an account if you do not have one.
2. Go to **Goals** → **Conversions** → **New conversion action** → **Website**.
3. Choose **Add a conversion action manually**. Category: **Purchase**. Value: **Use different values for each conversion**. Currency: **INR**.
4. Google shows a tag snippet. Copy the two parts of `send_to`:
   - `AW-123456789` is the Ads ID
   - the text after the slash is the conversion label
5. In Vercel → **Settings** → **Environment Variables**, add:

   `NEXT_PUBLIC_GOOGLE_ADS_ID` = `AW-123456789`

   `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL` = the label after the slash

6. Redeploy.

The tag does not load on `/admin`. A booking is counted once per payment, so a refresh does not create a second conversion.
