import { useState, useEffect } from 'react';
import axios from 'axios';

const useUp = (callback, validate) => {
    const [values, setValues] = useState({
        address_number: '',
        address_street: '',
        address_district: '',
        address_city: '',
        room_type: 'H',
        number_of_room: '',
        area: '',
        bathroom_type: 'S',
        bathroom_heater: null,
        kitchen_type: 'S',
        air_conditional: null,
        balcony: null,
        water_electricity_bill_per_week: '',
        optional_furniture: '',
        is_available: null,
        room_description: '',
    });
    const [roomid, setroomid] = useState(1)
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(values));
        setIsSubmitting(true);
        const data = {
            author: localStorage.getItem('user').username,
            address_number: values.address_number,
            address_street: values.address_street,
            address_district: values.address_district,
            address_city: values.address_city,
            room_type: values.room_type,
            number_of_room: values.number_of_room,
            area: values.area,
            bathroom_type: values.bathroom_type,
            bathroom_heater: values.bathroom_heater,
            kitchen_type: values.kitchen_type,
            air_conditional: values.air_conditional,
            balcony: values.balcony,
            water_electricity_bill_per_week: values.water_electricity_bill_per_week,
            optional_furniture: values.optional_furniture,
            is_available: values.is_available,
            room_description: values.room_description
        };
            
        axios.post('/api/create_room_action-api/', data, {headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}}).then(
        res => {
            console.log(res);
            setroomid(res.data.id);
        }
        ).catch(
        err => {
            console.log(err);
        })
    }

    useEffect(
    () => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
        }
    },
    [errors]
    );

    return { handleChange, handleSubmit, values, errors , roomid};
};

export default useUp;
