import TextField from '@mui/material/TextField';

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
                        <TextField
                            variant="outlined"
                            onChange={onChange}
                            type={field.type}
                            name={field.name}
                            id={field.name}
                            label={field.label}
                            placeholder={field.placeholder}
                            required={field.required}
                            value={field.value ?? ""}
                            fullWidth
                        />
                    </div>
                ))}
                <div className='flex justify-center'>
                <button
                    type="submit"
                    className="max-w-26 w-full bg-gradient-to-br from-tertiary to-primary font-bold hover:scale-105 hover:cursor-pointer text-white py-2 rounded-md hover:bg-primary/50 transition duration-200"
                >
                    {buttonText}
                </button>
                </div>
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