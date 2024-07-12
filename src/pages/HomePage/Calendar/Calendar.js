import React, { useState, useEffect } from "react";
import './Calendar.css';
import { CsvToHtmlTable } from "react-csv-to-table";
import csv_link from "./Untitled spreadsheet.csv";

function Calendar() {

    var text = `Date    Time    Event name    Description
7/11/2024    12:00:00 PM    Event 1    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at turpis vitae orci mollis maximus. Donec id cursus erat. Nulla in leo ante. Aliquam porttitor aliquet blandit. Nulla facilisi. Phasellus a velit lacus. Phasellus purus ante, accumsan sed tincidunt sed, aliquet non ex. Aenean et turpis a orci posuere lacinia. Cras vel metus tincidunt, hendrerit risus vitae, elementum dui."
7/12/2024    1:00:00 PM    Event 2    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at turpis vitae orci mollis maximus. Donec id cursus erat. Nulla in leo ante. Aliquam porttitor aliquet blandit. Nulla facilisi. Phasellus a velit lacus. Phasellus purus ante, accumsan sed tincidunt sed, aliquet non ex. Aenean et turpis a orci posuere lacinia. Cras vel metus tincidunt, hendrerit risus vitae, elementum dui."
7/13/2024    2:00:00 PM    Event 3    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at turpis vitae orci mollis maximus. Donec id cursus erat. Nulla in leo ante. Aliquam porttitor aliquet blandit. Nulla facilisi. Phasellus a velit lacus. Phasellus purus ante, accumsan sed tincidunt sed, aliquet non ex. Aenean et turpis a orci posuere lacinia. Cras vel metus tincidunt, hendrerit risus vitae, elementum dui."
7/14/2024    3:00:00 PM    Event 4    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at turpis vitae orci mollis maximus. Donec id cursus erat. Nulla in leo ante. Aliquam porttitor aliquet blandit. Nulla facilisi. Phasellus a velit lacus. Phasellus purus ante, accumsan sed tincidunt sed, aliquet non ex. Aenean et turpis a orci posuere lacinia. Cras vel metus tincidunt, hendrerit risus vitae, elementum dui."
7/15/2024    4:00:00 PM    Event 5    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at turpis vitae orci mollis maximus. Donec id cursus erat. Nulla in leo ante. Aliquam porttitor aliquet blandit. Nulla facilisi. Phasellus a velit lacus. Phasellus purus ante, accumsan sed tincidunt sed, aliquet non ex. Aenean et turpis a orci posuere lacinia. Cras vel metus tincidunt, hendrerit risus vitae, elementum dui."`;


    return (
        <>
            <div className="container">
                <div className="title">Calendar</div>
                <hr />
                <div className="calendar">
                    <CsvToHtmlTable
                        data={text}
                        csvDelimiter="    "
                        tableClassName="table table-striped table-hover"
                    />
                </div>
            </div>
        </>
    )
}

export default Calendar;