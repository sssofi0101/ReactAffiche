import React, { ChangeEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
    closeForm: () => void;
    activity: Activity | undefined;
    createOrEdit: (activity: Activity) => void;
    submitting: boolean;
}

export default function ActivityForm({closeForm, activity: selectedActivity, createOrEdit, submitting}: Props) {

    const initialState = selectedActivity?? {
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
    }

    const [activity, setActivity] = useState(initialState);

    function handleSubmit() {
        createOrEdit(activity);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = event.target;

        setActivity({...activity, [name] : value});
    }

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input placeholder='Title' value={activity.title} name = 'title' onChange={handleInputChange}/>
                <Form.TextArea placeholder='Description' value={activity.description} name = 'description' onChange={handleInputChange}/>
                <Form.Input placeholder='Category' value={activity.category} name = 'category' onChange={handleInputChange}/>
                <Form.Input placeholder='Date' value={activity.date} name = 'date' onChange={handleInputChange}/>
                <Form.Input placeholder='City'value={activity.city} name = 'city' onChange={handleInputChange}/>
                <Form.Input placeholder='Venue' value={activity.venue} name = 'venue' onChange={handleInputChange}/>
                <Button loading={submitting} floated="right" positive type="submit" content="Submit" value={activity.title} name = 'title' onChange={handleInputChange}/>
                <Button onClick={closeForm} floated="right" type="button" content="Cancel" value={activity.title} name = 'title' onChange={handleInputChange}/>
            </Form>
        </Segment>
    )
}