import * as React from "react";
import { Check, ChevronsUpDown, Search, Loader2 } from "lucide-react";
import * as Popover from "@radix-ui/react-popover";
import { Command } from "cmdk";
import { useDebounce } from "../../hooks/useDebounce"; 

interface CitySearchProps {
  value: string;
  error?: string;
  onChange: (cityName: string) => void;
}

export function CitySearchSelect({ value, error, onChange }: CitySearchProps) {
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");
  const [options, setOptions] = React.useState<
    Array<{ id?: any; name: string }>
  >([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const debouncedSearch = useDebounce(inputValue, 300);
  React.useEffect(() => {
    setIsLoading(true);

    fetch(
      `https://api.srijanivfcentre.com/api/v1/core/cities/?q=${encodeURIComponent(debouncedSearch)}`,
    )
      .then((res) => res.json())
      .then((data) => {
        if (data && data.cities) {
          setOptions(data.cities);
        }
      })
      .catch((err) => console.error("Error looking up city entries:", err))
      .finally(() => setIsLoading(false));
  }, [debouncedSearch]);

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <button
          type="button"
          aria-expanded={open}
          className={`w-full h-12 px-4 rounded-xl border bg-white text-left flex items-center justify-between outline-none transition focus:ring-2 focus:ring-pink-200 focus:border-pink-400 cursor-pointer text-sm ${
            error ? "border-red-400 focus:ring-red-200" : "border-gray-200"
          }`}
        >
          <span
            className={`block truncate ${!value ? "text-gray-400" : "text-gray-900 font-medium"}`}
          >
            {value ? value : "Select your city"}
          </span>
          <ChevronsUpDown className="h-4 w-4 text-gray-400 opacity-50 shrink-0" />
        </button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          sideOffset={6}
          className="w-[var(--radix-popover-trigger-width)] bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden z-50"
        >
          <Command className="flex flex-col w-full h-full" shouldFilter={false}>
            <div className="flex items-center px-3 border-b border-slate-100 bg-slate-50/50">
              {isLoading ? (
                <Loader2 className="h-4 w-4 text-pink-500 animate-spin shrink-0" />
              ) : (
                <Search className="h-4 w-4 text-gray-400 shrink-0" />
              )}
              <input
                placeholder="Type your city name..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-full px-2 py-3 bg-transparent text-sm text-gray-800 outline-none placeholder-gray-400"
              />
            </div>

            <Command.List className="max-h-60 overflow-y-auto py-1 text-sm text-gray-700 scrollbar-thin">
              {!isLoading && options.length === 0 && (
                <div className="px-4 py-4 text-center text-xs text-gray-400 font-medium">
                  No cities found matching your entry
                </div>
              )}

              {options.map((cityObj) => {
                const isSelected =
                  value.toLowerCase() === cityObj.name.toLowerCase();
                return (
                  <div
                    key={cityObj.name}
                    onClick={() => {
                      onChange(cityObj.name);
                      setOpen(false);
                    }}
                    className={`px-4 py-2.5 flex items-center justify-between cursor-pointer transition-colors outline-none select-none hover:bg-slate-50 ${
                      isSelected
                        ? "bg-pink-50/70 text-pink-600 font-semibold"
                        : ""
                    }`}
                  >
                    <span className="block truncate">{cityObj.name}</span>
                    {isSelected && (
                      <Check className="h-4 w-4 text-pink-600 shrink-0" />
                    )}
                  </div>
                );
              })}
            </Command.List>
          </Command>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
