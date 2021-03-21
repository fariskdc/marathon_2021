import React from "react";
import {
  Inject,
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  EventSettingsModel,
} from "@syncfusion/ej2-react-schedule";

class Calendar extends React.Component {
  localData: EventSettingsModel = {
    dataSource: [
      {
        EndTime: new Date(2021, 0, 11, 6, 30),
        StartTime: new Date(2021, 0, 11, 4, 0),
      },
    ],
  };

  render() {
    return (
      <ScheduleComponent currentView="Month" eventSettings={this.localData}>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    );
  }
}

export default Calendar;
