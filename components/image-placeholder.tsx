import { ImageIcon } from "lucide-react";

export function ImagePlaceholder({
  className = "",
  label = "Image coming soon",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 rounded-sm border border-dashed border-[#c9c2b0] bg-[#ece7da] text-[#8a8370] ${className}`}
    >
      <ImageIcon className="size-6" strokeWidth={1.5} />
      <span className="text-[11px] font-medium tracking-widest uppercase">
        {label}
      </span>
    </div>
  );
}
