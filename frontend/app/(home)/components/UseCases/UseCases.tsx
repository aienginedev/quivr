import { useTranslation } from "react-i18next";

import { UseCasesListing } from "./components/UseCasesListing/UseCasesListing";

export const UseCases = (): JSX.Element => {
  const { t } = useTranslation("home");

  return (
    <div className="p-4 text-white">
      <div className="mb-3">
        <h2 className="text-center text-3xl font-semibold mb-2">
          {t("useCases.title")}
        </h2>
        <p className="text-center text-lg">{t("useCases.subtitle")}</p>
      </div>
      <UseCasesListing />
    </div>
  );
};
