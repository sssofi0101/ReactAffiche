import React, { SyntheticEvent, useState } from "react";
import { Activity } from "../../../app/models/activity";
import { Button, Item, Label, Segment } from "semantic-ui-react";

interface Props {
    activities: Activity[];
    selectActivityFunc: (id: string) => void;
    deleteActivity: (id: string) => void;
    submitting: boolean;
}

export default function ActivityList({activities, selectActivityFunc, deleteActivity, submitting}:Props) {
    const [target, setTarget] = useState('');

    function handleActivityDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deleteActivity(id);
    }

    return (
        <Segment>
            <Item.Group divided>
                {activities.map(activity => (
                    <Item key = {activity.id}>
                        <Item.Content>
                            <Item.Header as={'a'}>
                                {activity.title}
                            </Item.Header>
                            <Item.Meta>
                                {activity.date}
                            </Item.Meta>
                            <Item.Description>
                                <div>{activity.description}</div>
                                <div>{activity.city}, {activity.venue}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button onClick = {() => selectActivityFunc(activity.id)} 
                                    floated="right" content="View" color="blue" />
                                <Label basic content={activity.category}/>
                                <Button 
                                    name={activity.id}
                                    loading={submitting && target === activity.id} 
                                    onClick = {(e) => handleActivityDelete(e, activity.id)} 
                                    floated="right" 
                                    content="Delete" 
                                    color="red" />
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}