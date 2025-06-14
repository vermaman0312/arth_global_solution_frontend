import React from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui";
import { ChevronsUpDown } from "lucide-react";
import { useTranslation } from "../../react-intl/useTranslation";
import { useLocation } from "react-router-dom";

interface TItemsType {
  name: string;
  link: string;
}

type props = {
  title: string;
  items?: Array<string | TItemsType>;
  URL?: string;
};

const CustomCollapsible = ({ ...props }: props) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const location = useLocation();
  const pathname = location.pathname;
  const url = pathname.split("/public/")[1];
  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="flex w-full flex-col gap-0"
    >
      <div className={`flex items-center justify-between px-4 p-1 ${url === props.URL?.split("/public/")[1] ? "bg-gray-400" : ""} rounded-full`}>
        <h4 className="relative text-foreground-secondary">{t(props.title)}</h4>
        <CollapsibleTrigger asChild>
          <div className="flex items-center justify-between">
            <ChevronsUpDown className="w-5 h-5 text-foreground-secondary" />
            <span className="sr-only">Toggle</span>
          </div>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="flex flex-col gap-2 overflow-y-auto scrollbar-hidden">
        {props.items?.map((item, index) => {
          const isString = typeof item === "string";
          const label = isString ? item : item.name;
          return (
            <div
              key={index}
              className="rounded-md border border-gray-500 px-4 py-2 font-poppins text-sm mt-2 text-foreground-secondary"
            >
              {t(label)}
            </div>
          );
        })}
      </CollapsibleContent>
    </Collapsible>
  );
};

export default CustomCollapsible;
