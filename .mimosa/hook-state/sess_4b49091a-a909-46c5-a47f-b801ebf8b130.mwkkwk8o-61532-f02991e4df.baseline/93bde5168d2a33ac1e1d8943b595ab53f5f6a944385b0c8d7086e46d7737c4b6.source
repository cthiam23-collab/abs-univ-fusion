"use client"

/*
 * Tabs en CSS pur — API identique à l'ancienne version Radix.
 * Fonctionne SANS JavaScript : chaque onglet est une radio cachée dans un
 * <label>, chaque panneau est affiché via :has(input:checked).
 * Les règles CSS actives sont générées par instance à partir des valeurs
 * réellement présentes dans les enfants.
 */

import * as React from "react"
import { cn } from "@/lib/utils"

type TabsContextValue = { baseId: string; defaultValue?: string }

const TabsContext = React.createContext<TabsContextValue | null>(null)

function collectValues(node: React.ReactNode, acc: string[]) {
  React.Children.forEach(node, (child) => {
    if (!React.isValidElement(child)) return
    const props = child.props as { value?: unknown; children?: React.ReactNode }
    if (typeof props?.value === "string") acc.push(props.value)
    if (props?.children) collectValues(props.children, acc)
  })
}

export function Tabs({
  defaultValue,
  value: _controlled,
  onValueChange: _onValueChange,
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
}) {
  const baseId = React.useId().replace(/[^a-zA-Z0-9_-]/g, "")
  const values: string[] = []
  collectValues(children, values)
  const uniqueValues = Array.from(new Set(values))
  const activeDefault = defaultValue ?? uniqueValues[0]

  return (
    <TabsContext.Provider value={{ baseId, defaultValue: activeDefault }}>
      <div data-tabs={baseId} className={className} {...props}>
        <style
          dangerouslySetInnerHTML={{
            __html: [
              `[data-tabs="${baseId}"] [data-panel]{display:none}`,
              ...uniqueValues.map(
                (v) =>
                  `[data-tabs="${baseId}"]:has(input[value="${v}"]:checked) [data-panel="${v}"]{display:block}`,
              ),
              ...uniqueValues.map(
                (v) =>
                  `[data-tabs="${baseId}"]:has(input[value="${v}"]:checked) [data-trigger="${v}"]{background:var(--primary);color:var(--primary-foreground);border-color:var(--primary);box-shadow:0 1px 3px 0 rgb(0 0 0 / 0.15)}`,
              ),
            ].join("\n"),
          }}
        />
        {children}
      </div>
    </TabsContext.Provider>
  )
}

export function TabsList({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-tabs-list=""
      role="tablist"
      className={cn(
        "inline-flex flex-wrap items-center justify-center gap-1 rounded-lg bg-slate-100 p-1 text-slate-600",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function TabsTrigger({
  value,
  className,
  children,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement> & { value: string }) {
  const ctx = React.useContext(TabsContext)
  if (!ctx) throw new Error("TabsTrigger must be used within Tabs")
  return (
    <label
      data-trigger={value}
      className={cn(
        "inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-md bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-600 ring-offset-background transition-all hover:bg-white hover:text-blue-700",
        className,
      )}
      {...props}
    >
      <input
        type="radio"
        name={ctx.baseId}
        value={value}
        defaultChecked={ctx.defaultValue === value}
        className="sr-only"
        tabIndex={-1}
        aria-hidden="true"
      />
      {children}
    </label>
  )
}

export function TabsContent({
  value,
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { value: string }) {
  const ctx = React.useContext(TabsContext)
  if (!ctx) throw new Error("TabsContent must be used within Tabs")
  return (
    <div
      data-panel={value}
      role="tabpanel"
      tabIndex={0}
      className={cn("mt-2 focus-visible:outline-none", className)}
      {...props}
    >
      {children}
    </div>
  )
}
