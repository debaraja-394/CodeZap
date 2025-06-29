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
                control: (provided,state) => ({
                    ...provided,
                    backgroundColor: '#fff',
                    borderColor: state.isFocused ? '#3b92f6' : '#d1d5db',
                    boxShadow: state.isFocused ? '0 0 0 2px #3b82f633' : '0 1px 2px rgba(0,0,0,0.05)',
                    borderRadius: '0.5rem',
                    minHeight: '2.5rem',
                    '&hover': { borderColor: '#3b82f6'}

                }),
                menu: (provided) => ({
                    ...provided,
                    backgroundColor: '#fff',
                    borderRadius: '0.5rem',
                    boxShadow: '0 4px 16px rgba(19, 105, 59, 0.12)',
                    marginTop: 4,
                }),
                option: (provided, state) => ({
                    ...provided,
                    backgroundColor: state.isSelected
                        ? (state.isFocused ? '#2563eb' : '#3b82f6') // darker blue on hover+selected
                        : state.isFocused
                        ? '#e0e7ef'
                        : '#fff',
                    color: state.isSelected
                        ? (state.isFocused ? '#fff' : '#fff') // keep text white for selected, or adjust as needed
                        : '#1f2937',
                    fontWeight: state.isSelected ? 600 : 400,
                    cursor: 'pointer',
                    '&:hover': {
                        backgroundColor: state.isSelected ? '#2563eb' : 'rgba(187, 28, 199, 0.76)', // match above
                        color: '#fff', // ensure text is visible on blue
                    },
                }),
                singleValue: (provided) => ({
                    ...provided,
                    color: '#1f2937',
                    fontWeight: 500,
                }),
                indicatorSeparator: () => ( { display: 'none' }),
                dropdownIndicator: (provided, state) => ({
                    ...provided,
                    color: state.isFocused ? '#3b82f6' : '#9ca3af',
                    '&:hover' : { color: '#3b82f6'}
                })
                }}
                placeholder="Select Language"
            />
        </div>
    )
}