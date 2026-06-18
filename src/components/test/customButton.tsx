import { cn } from "@/lib/utils";

interface CustomButtonprops {
  disabled: boolean;
  isRounded: boolean;
}

export default function CustomButton({
  disabled,
  isRounded,
}: CustomButtonprops) {
  return (
    <>
      <button
        className={`text-sm ${disabled ? "bg-gray-300" : "bg-blue-500"} ${isRounded && "rounded-full"} p-4`}
      >
        Hello
      </button>

      {/* ใช้งาน Cn สามารถเขียนเงื่อนไขในการทำงานได้เลยโดยไม่ต้องใช้งาน ` $ โดยใช้งาน , แทน*/}
      <button
        className={cn(
          "text-sm",
          disabled ? "bg-gray-300" : "bg-blue-500",
          isRounded && "rounded-full",
          "p-4",
        )}
      >
        Hello
      </button>
    </>
  );
}
