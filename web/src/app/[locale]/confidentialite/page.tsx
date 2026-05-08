import { LegalPage } from "@/components/sections/LegalPage";
import { SITE } from "@/lib/content/site";

export const metadata = { title: "Politique de confidentialité — Précieuse" };

export default function ConfidentialitePage() {
  return (
    <LegalPage
      title="Politique de confidentialité"
      overline="Vos données personnelles"
    >
      <h2>Données collectées</h2>
      <p>
        Lorsque vous utilisez notre formulaire de contact, nous collectons
        votre prénom, votre adresse email et le message que vous nous envoyez.
        Ces données servent uniquement à vous répondre.
      </p>
      <h2>Conservation</h2>
      <p>
        Les messages sont conservés trois ans à compter du dernier échange.
        Aucune donnée n&apos;est revendue à des tiers.
      </p>
      <h2>Vos droits</h2>
      <p>
        Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de
        rectification et de suppression de vos données. Pour les exercer,
        contactez-nous à <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
      </p>
      <h2>Cookies</h2>
      <p>
        Le site utilise uniquement des cookies techniques nécessaires à son
        fonctionnement. Aucun cookie de tracking publicitaire n&apos;est
        déposé sans votre consentement.
      </p>
    </LegalPage>
  );
}
