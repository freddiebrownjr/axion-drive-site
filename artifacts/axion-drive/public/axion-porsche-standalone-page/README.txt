AXION DRIVE GROUP — STANDALONE PORSCHE PAGE

Ready page URL after deployment:
https://axiondrivegroup.com/porsche-panamera/

For your existing Vite site:
1. Copy the folder "porsche-panamera" from this ZIP's "public" folder into:
   ~/Documents/GitHub/axion-drive-site/artifacts/axion-drive/public/
2. The result should be:
   artifacts/axion-drive/public/porsche-panamera/index.html
   artifacts/axion-drive/public/porsche-panamera/front-detail.jpg
   artifacts/axion-drive/public/porsche-panamera/engine.jpg
3. Add this link to the Porsche card on your home page:
   <a href="/porsche-panamera/">View Porsche details</a>
   In React/TSX this same anchor works inside JSX.
4. Test locally by building the existing site, then verify the output has
   dist/public/porsche-panamera/index.html (or your configured build output).
5. Commit/push only after verifying the homepage still works. Cloudflare must
   deploy the built site for the page to become live.

No npm, Node, or Vite is required to CREATE this standalone page.
The EXISTING site's deployment pipeline may still use Vite.

Before advertising, confirm asking price ($42,000), mileage, vehicle history,
trim, equipment, availability and disclosures with the owner.
