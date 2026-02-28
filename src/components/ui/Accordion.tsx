"use client";

import * as RadixAccordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  id: string;
  trigger: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  return (
    <RadixAccordion.Root type="single" collapsible className="space-y-3">
      {items.map((item) => (
        <RadixAccordion.Item
          key={item.id}
          value={item.id}
          className="rounded-lg border border-gray-200 overflow-hidden"
        >
          <RadixAccordion.Header>
            <RadixAccordion.Trigger className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-medium text-gray-800 hover:bg-gray-50 transition-colors data-[state=open]:bg-gray-50">
              {item.trigger}
              <ChevronDown className="h-4 w-4 text-gray-500 transition-transform data-[state=open]:rotate-180" />
            </RadixAccordion.Trigger>
          </RadixAccordion.Header>
          <RadixAccordion.Content className="overflow-hidden data-[state=open]:animate-accordion-open data-[state=closed]:animate-accordion-close">
            <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
              {item.content}
            </div>
          </RadixAccordion.Content>
        </RadixAccordion.Item>
      ))}
    </RadixAccordion.Root>
  );
}
