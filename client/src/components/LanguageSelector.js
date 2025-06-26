import Select from 'react-select';

export default function LanguageSelector({ language, setLanguage}){
   const options = [
            { value: 'python', label: 'Python' },
            { value: 'javascript', label: 'Javascript' },
            { value: 'C', label: 'C' },
            { value: 'C++', label: 'C++' },
        ];
    return(
        <div className="w-40">
            <Select
                value={options.find(opt => opt.value === language)}
                onChange={opt => setLanguage(opt.value)}
                options={options}
                styles={{
                control: (provided) => ({
                    ...provided,
                    backgroundColor: '#fff',
                    borderColor: '#d1d5db',
                    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
                    borderRadius: '0.375rem',
                    padding: '0.25rem',
                    '&:hover': {
                    borderColor: '#9ca3af',
                    },
                }),
                menu: (provided) => ({
                    ...provided,
                    backgroundColor: '#fff',
                    borderRadius: '0.375rem',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                }),
                option: (provided, state) => ({
                    ...provided,
                    backgroundColor: state.isSelected ? '#10b981' : state.isFocused ? '#f3f4f6' : '#fff',
                    color: state.isSelected ? '#fff' : '#1f2937',
                    '&:hover': {
                    backgroundColor: '#f3f4f6',
                    },
                }),
                singleValue: (provided) => ({
                    ...provided,
                    color: '#1f2937',
                }),
                }}
                placeholder="Select Language"
            />
        </div>
    )
}