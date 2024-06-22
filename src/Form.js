import React, { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        birthDate: '',
        gender: '',
        preferences: [],
        country: '',
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData((prevState) => {
                if (checked) {
                    return {
                        ...prevState,
                        preferences: [...prevState.preferences, value],
                    };
                } else {
                    return {
                        ...prevState,
                        preferences: prevState.preferences.filter((pref) => pref !== value),
                    };
                }
            });
        } else {
            setFormData((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </label>
            </div>

            <div>
                <label>
                    Birth Date:
                    <input
                        type="date"
                        name="birthDate"
                        value={formData.birthDate}
                        onChange={handleChange}
                    />
                </label>
            </div>

            <div>
                <label>Gender:</label>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={formData.gender === 'male'}
                        onChange={handleChange}
                    />
                    Male
                </label>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={formData.gender === 'female'}
                        onChange={handleChange}
                    />
                    Female
                </label>
            </div>

            <div>
                <label>Preferences:</label>
                <label>
                    <input
                        type="checkbox"
                        name="preferences"
                        value="sports"
                        checked={formData.preferences.includes('sports')}
                        onChange={handleChange}
                    />
                    Sports
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="preferences"
                        value="music"
                        checked={formData.preferences.includes('music')}
                        onChange={handleChange}
                    />
                    Music
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="preferences"
                        value="movies"
                        checked={formData.preferences.includes('movies')}
                        onChange={handleChange}
                    />
                    Movies
                </label>
            </div>

            <div>
                <label>
                    Country:
                    <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                    >
                        <option value="">Select your country</option>
                        <option value="USA">USA</option>
                        <option value="Canada">Canada</option>
                        <option value="UK">UK</option>
                        <option value="Australia">Australia</option>
                    </select>
                </label>
            </div>

            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;
