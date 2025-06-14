import CustomLabel from "../../../../components/custom_label/component";
import { useTranslation } from "../../../../react-intl/useTranslation";

const OurMotivation = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full flex flex-col items-start justify-start gap-4">
      <div className="w-full overflow-hidden">
        <CustomLabel className="max-w-7xl mx-auto text-xl md:text-4xl font-bold text-foreground-primary font-sans z-10">
          <span className="text-foreground-secondary bg-background-secondary p-2 rounded-tr-lg">
            {t("unauthenticated_page.about_us_page.our_motivation_title")[0]}
          </span>
          {t("unauthenticated_page.about_us_page.our_motivation_title").slice(1)}
        </CustomLabel>
      </div>
      <CustomLabel className="text-md text-justify font-normal text-foreground-primary font-sans z-10">
        {t("unauthenticated_page.about_us_page.our_motivation_description")}
      </CustomLabel>
    </div>
  );
};

export default OurMotivation;
