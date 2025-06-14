type AuthCardProps = {
    title: string;
    fields: any[]; 
    buttonText: string;
    downText?: React.ReactNode; 
    onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const AuthCard = ({ onSubmit, onChange, title, fields, buttonText, downText }: AuthCardProps) => {
    return (
        <div className="authCard">
            <form onSubmit={onSubmit}>
                <h2 className="text-2xl font-bold mb-4">{title}</h2>
                {fields.map((field, index) => (
                    <div key={index} className="mb-4">
                        <label className="block text-sm font-medium mb-1" htmlFor={field.name}>
                            {field.label}
                        </label>
                        <input
                            onChange={onChange}
                            type={field.type}
                            name={field.name}
                            id={field.name}
                            placeholder={field.placeholder}
                            required={field.required}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                ))}
                <button
                    type="submit"
                    className="w-full bg-primary font-bold hover:scale-105 hover:cursor-pointer text-white py-2 rounded-md hover:bg-primary/50 transition duration-200"
                >
                    {buttonText}
                </button>
                {downText && (
                    <div className="mt-4 text-center text-sm">
                        {downText}
                    </div>
                )}
            </form>

            
        </div>
    );
};

export { AuthCard };