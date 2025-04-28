"use client"

import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"
import { Sun, Moon } from "lucide-react"

import { cn } from "@/lib/utils"

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  const [isDark, setIsDark] = React.useState(false)
  React.useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setIsDark(savedTheme === "dark")
      document.documentElement.classList.toggle("dark", savedTheme === "dark")
      return
    }
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    setIsDark(prefersDark)
    document.documentElement.classList.toggle("dark", prefersDark)
  }, [])
  
  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    localStorage.setItem("theme", newIsDark ? "dark" : "light")
    document.documentElement.classList.toggle("dark", newIsDark)
  }

  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      checked={isDark}
      onCheckedChange={toggleTheme}
      className={cn(
        "peer relative data-[state=checked]:bg-gray-900 data-[state=unchecked]:bg-white focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-8 w-15 shrink-0 items-center rounded-full border border-transparent shadow-sm transition-all outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "data-[state=checked]:bg-amber-300 data-[state=unchecked]:bg-gray-900 pointer-events-none flex items-center justify-center size-7 rounded-full shadow-sm ring-0 transition-transform data-[state=checked]:translate-x-7 data-[state=unchecked]:translate-x-0"
        )}
      >
        {isDark ? (
          <Moon className="h-3 w-3 text-blue-900" />
        ) : (
          <Sun className="h-3 w-3 text-amber-300" />
        )}
      </SwitchPrimitive.Thumb>
    </SwitchPrimitive.Root>
  )
}

export { Switch }