type TextareaProps = {
    value: string;
    placeholder?: string;
    onChange: ( e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export function Textarea({
  value,
  placeholder,
  onChange,  
} : TextareaProps) {
    return (
        <textarea 
            value={value} 
            placeholder={placeholder} 
            onChange={onChange} 
            className="h-56 mb-5 w-full rounded-xl border border-zinc-800 bg-zinc-900 p-4 outline-none transition focus:border-zinc-700 focus:ring-2 focus:ring-zinc-700" 
        />
    );
}