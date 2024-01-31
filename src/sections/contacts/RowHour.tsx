export default function RowHour({day, hour}: {day: string, hour:string}) {
    return (
        <>
            <div className={"col-start-1"}>{day}</div>
            <div className={"col-start-2"}>{hour}</div>
        </>
    );
}