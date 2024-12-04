import React from "react";
import { Grid } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";

interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivityFunc: (id: string) => void;
    cancelSelectActivityFunc: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
    createOrEdit: (activty : Activity) => void;
    deleteActivity: (id: string) => void;
}

export default function ActivityDashboard({activities, selectedActivity, 
    selectActivityFunc, cancelSelectActivityFunc, editMode, openForm, closeForm, createOrEdit, deleteActivity}: Props) {

    return (
        <Grid>
            <Grid.Column width={'10'}>
                <ActivityList 
                    activities={activities} 
                    selectActivityFunc = {selectActivityFunc} 
                    deleteActivity = {deleteActivity}/>
            </Grid.Column>
            <Grid.Column width={'6'}>
                {selectedActivity && !editMode &&
                <ActivityDetails 
                    activity={selectedActivity} 
                    cancelSelectActivityFunc = {cancelSelectActivityFunc} 
                    openForm = {openForm}
                    /> }
                {editMode && 
                <ActivityForm 
                    closeForm = {closeForm} 
                    activity = {selectedActivity}
                    createOrEdit = {createOrEdit}/> }
            </Grid.Column>
        </Grid>
    )
}