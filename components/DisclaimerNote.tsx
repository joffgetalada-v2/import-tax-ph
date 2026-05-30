export default function DisclaimerNote() {
  return (
    <p className="text-xs text-muted leading-relaxed text-center">
      Estimate for guidance only — not an official BOC assessment or legal/tax advice.
      Actual duties depend on HS/AHTN classification and BOC valuation.{' '}
      <a
        href="https://customs.gov.ph"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-foreground transition-colors"
      >
        Verify with the Bureau of Customs.
      </a>
    </p>
  );
}
