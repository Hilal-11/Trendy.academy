import { PlusIcon } from 'lucide-react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { Accordion, AccordionContent, AccordionItem } from '@/components/ui/accordion'
import { GENERAL_QUESTIONS , ABOUT_TRENDY_QUESTIONS } from '@/public/config/faqConfig'


export const FAQ_A = () => {
  return (
    <Accordion type='single' collapsible className='w-full' defaultValue='item-1'>
        <div className='pb-3'>
            <h1 className='font-sans font-bold text-[16px] lg:text-xl relative -left-2'>General Questions Trendy.adademy</h1>
        </div>
      {GENERAL_QUESTIONS.map((item, index) => (
        <AccordionItem key={index} value={`item-${index + 1}`}>
          <AccordionPrimitive.Header className='flex items-center gap-2'>
            <AccordionPrimitive.Trigger
              data-slot='accordion-trigger'
              className='focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none  focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0'
            >
              {item.question}
              <PlusIcon className='text-muted-foreground pointer-events-none size-4 shrink-0 transition-transform duration-200' />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionContent className='font-mono text-xs text-muted-foreground'>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
export const FAQ_B = () => {
    return (
      <Accordion type='single' collapsible className='w-full'>
        <div className='pb-3'>
            <h1 className='font-sans font-bold text-[16px] lg:text-xl relative -left-2'>About Trendy.adademy</h1>
        </div>
        {ABOUT_TRENDY_QUESTIONS.map((item, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionPrimitive.Header className='flex items-center gap-2'>
              <AccordionPrimitive.Trigger
                data-slot='accordion-trigger'
                className='focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none  focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0'
              >
                {item.question}
                <PlusIcon className='text-muted-foreground pointer-events-none size-4 shrink-0 transition-transform duration-200' />
              </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>
            <AccordionContent className='font-sans text-xs text-muted-foreground'>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    )
  }



export const FAQ = () => {
    return (
        <div className='w-full lg:pt-20 px-2 lg:px-8'>
            <div className='mx-auto flex flex-col items-center justify-center lg:pb-10'>
                <h1 className='text-center font-sans font-bold text-3xl lg:text-4xl text-neutral-800 dark:text-neutral-200'>Ask me anything.</h1>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 px-3 gap-6 lg:gap-16'>
                <div>
                    <FAQ_A />
                </div>
                <div>
                    <FAQ_B />
                </div>
            </div>
        </div>
    )
} 