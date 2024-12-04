import React from "react";
import { Button, ButtonGroup, Card, CardContent, CardDescription, CardHeader, CardMeta, Image } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
    activity: Activity;
    cancelSelectActivityFunc: () => void;
    openForm: (id: string) => void;
}

export default function ActivityDetails({activity, cancelSelectActivityFunc, openForm}: Props) {
    return (
        <Card fluid>
            <Image src={`/images/categoryImages/${activity.category}.jpg`}/>
            <CardContent>
                <CardHeader>{activity.title}</CardHeader>
                <CardMeta>
                    <span>{activity.date}</span>
                </CardMeta>
                <CardDescription>
                    {activity.description}
                </CardDescription>
            </CardContent>
            <CardContent extra>
                <ButtonGroup widths='2'>
                    <Button onClick={() => openForm(activity.id)} basic color="purple" content="Edit" />
                    <Button onClick={cancelSelectActivityFunc} basic color="grey" content="Cancel" />
                </ButtonGroup>
            </CardContent>
        </Card>
    )
}