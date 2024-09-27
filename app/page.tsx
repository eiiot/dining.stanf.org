"use client";

import { Input } from "@/components/ui/input";
import { useState } from "react";

const diningHalls = [
  {
    name: "Arrillaga Family Dining Commons",
    location: {
      lat: null,
      long: null
    },
    hours: [
      {
        name: "Breakfast",
        startTime: "7:30am",
        endTime: "10:00am",
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      },
      {
        name: "Lunch",
        startTime: "11:00am",
        endTime: "3:00pm",
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      },
      {
        name: "Dinner",
        startTime: "5:00pm",
        endTime: "8:30pm",
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      },
      {
        name: "Brunch",
        startTime: "9:00am",
        endTime: "1:30pm",
        days: ["Saturday", "Sunday"],
      },
      {
        name: "Dinner",
        startTime: "5:00pm",
        endTime: "8:00pm",
        days: ["Saturday", "Sunday"],
      },
      {
        name: "Late Night",
        startTime: "9:30pm",
        endTime: "2:00am",
        days: ["Thursday", "Friday", "Saturday", "Sunday"],
      }
    ],
  },
  {
    name: "Lakeside Dining",
    location: {
      lat: null,
      long: null
    },
    hours: [
      {
        name: "Breakfast",
        startTime: "7:30am",
        endTime: "10:00am",
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      },
      {
        name: "Lunch",
        startTime: "11:00am",
        endTime: "2:00pm",
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      },
      {
        name: "Dinner",
        startTime: "5:00pm",
        endTime: "8:30pm",
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      },
      {
        name: "Brunch",
        startTime: "9:00am",
        endTime: "1:30pm",
        days: ["Saturday", "Sunday"],
      },
      {
        name: "Dinner",
        startTime: "5:00pm",
        endTime: "8:00pm",
        days: ["Saturday", "Sunday"],
      },
      {
        name: "Late Night",
        startTime: "9:30pm",
        endTime: "2:00am",
        days: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      }
    ],
  },
  {
    name: "Wilbur Dining",
    location: {
      lat: null,
      long: null
    },
    hours: [
      {
        name: "Breakfast",
        startTime: "7:30am",
        endTime: "9:00am",
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      },
      {
        name: "Lunch",
        startTime: "11:00am",
        endTime: "1:30pm",
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      },
      {
        name: "Dinner",
        startTime: "5:00pm",
        endTime: "8:00pm",
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      },
      {
        name: "Brunch",
        startTime: "10:30am",
        endTime: "1:30pm",
        days: ["Saturday", "Sunday"],
      },
      {
        name: "Dinner",
        startTime: "5:00pm",
        endTime: "8:00pm",
        days: ["Saturday", "Sunday"],
      },
    ],
  },
  {
    name: "Branner Dining",
    location: {
      lat: null,
      long: null
    },
    hours: [
      {
        name: "Lunch",
        startTime: "11:00am",
        endTime: "1:30pm",
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      },
      {
        name: "Dinner",
        startTime: "5:00pm",
        endTime: "7:00pm",
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      },
    ],
  },
  {
    name: "Stern Dining",
    location: {
      lat: null,
      long: null
    },
    hours: [
      {
        name: "Breakfast",
        startTime: "7:30am",
        endTime: "9:00am",
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      },
      {
        name: "Lunch",
        startTime: "11:00am",
        endTime: "1:30pm",
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      },
      {
        name: "Dinner",
        startTime: "5:00pm",
        endTime: "8:00pm",
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      },
      {
        name: "Brunch",
        startTime: "10:30am",
        endTime: "1:30pm",
        days: ["Saturday", "Sunday"],
      },
      {
        name: "Dinner",
        startTime: "5:00pm",
        endTime: "8:00pm",
        days: ["Saturday", "Sunday"],
      },
    ],
  },
  {
    name: "Gerhard Casper Dining",
    location: {
      lat: null,
      long: null
    },
    hours: [
      {
        name: "Breakfast",
        startTime: "7:30am",
        endTime: "9:00am",
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      },
      {
        name: "Lunch",
        startTime: "11:00am",
        endTime: "1:30pm",
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      },
      {
        name: "Dinner",
        startTime: "5:00pm",
        endTime: "8:00pm",
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      },
      {
        name: "Brunch",
        startTime: "10:30am",
        endTime: "1:30pm",
        days: ["Saturday", "Sunday"],
      },
      {
        name: "Dinner",
        startTime: "5:00pm",
        endTime: "8:00pm",
        days: ["Saturday", "Sunday"],
      },
    ],
  },
  {
    name: "Florence Moore Dining",
    location: {
      lat: null,
      long: null
    },
    hours: [
      {
        name: "Breakfast",
        startTime: "7:30am",
        endTime: "9:00am",
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      },
      {
        name: "Lunch",
        startTime: "11:00am",
        endTime: "1:30pm",
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      },
      {
        name: "Dinner",
        startTime: "5:00pm",
        endTime: "8:00pm",
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      },
      {
        name: "Brunch",
        startTime: "10:30am",
        endTime: "1:30pm",
        days: ["Saturday", "Sunday"],
      },
      {
        name: "Dinner",
        startTime: "5:00pm",
        endTime: "8:00pm",
        days: ["Saturday", "Sunday"],
      },
    ],
  },
  {
    name: "Ricker Dining",
    location: {
      lat: null,
      long: null
    },
    hours: [
      {
        name: "Breakfast",
        startTime: "7:30am",
        endTime: "9:00am",
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      },
      {
        name: "Lunch",
        startTime: "11:00am",
        endTime: "1:30pm",
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      },
      {
        name: "Dinner",
        startTime: "5:00pm",
        endTime: "8:00pm",
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      },
      {
        name: "Brunch",
        startTime: "10:30am",
        endTime: "1:30pm",
        days: ["Saturday", "Sunday"],
      },
      {
        name: "Dinner",
        startTime: "5:00pm",
        endTime: "8:00pm",
        days: ["Saturday", "Sunday"],
      },
    ],
  },
];


interface Location {
  lat: number | null;
  long: number | null;
}

interface TimeSlot {
  name: string;
  startTime: string;
  endTime: string;
  days: string[];
}

interface DiningHall {
  name: string;
  location: Location;
  hours: TimeSlot[];
}


const dateStringToDate = (dateString: string, isTomorrow: boolean) => {
  // returns the time in PST (for example 11:00am PST would be 11am PST on the current day in PST)


  const now = new Date();

  const amPm = dateString.slice(-2);

  const [hours, minutes] = dateString
    .slice(0, -2)
    .split(":");

  console.log(hours, minutes, amPm);

  const hours24 = parseInt(hours) + (amPm === "pm" ? 12 : 0);

  const date = new Date(now.getFullYear(), now.getMonth(), now.getDate() + (isTomorrow ? 1 : 0), (hours24), parseInt(minutes));

  return date;
}

const getOpenDiningSlot = (diningHall: DiningHall): TimeSlot | null => {
  const now = new Date();
  const day = now.toLocaleDateString("en-US", { weekday: "long" });

  const openSlot = diningHall.hours.find((slot) => {

    if (!slot.days.includes(day)) {
      return false;
    }

    const isTomorrow = slot.endTime.includes("am") && slot.startTime.includes("pm");

    const startTime = dateStringToDate(slot.startTime, false);
    const endTime = dateStringToDate(slot.endTime, isTomorrow);

    return now >= startTime && now <= endTime;
  });

  return openSlot || null;
}

const getOpeningSoonDiningSlot = (diningHall: DiningHall): TimeSlot | null => {
  // defined as opening in 1 hour

  const now = new Date();
  const day = now.toLocaleDateString("en-US", { weekday: "long" });

  const openingSlot = diningHall.hours.find((slot) => {

    if (!slot.days.includes(day)) {
      return false;
    }

    const isTomorrow = slot.endTime.includes("am") && slot.startTime.includes("pm");

    const startTime = dateStringToDate(slot.startTime, false);
    const endTime = dateStringToDate(slot.endTime, isTomorrow);

    return now <= startTime && now >= new Date(startTime.getTime() - 60 * 60 * 1000);
  });

  return openingSlot || null;
}

export default function Home() {
  const openDining = diningHalls.filter((diningHall) => getOpenDiningSlot(diningHall) !== null);

  const openingSoonDining = diningHalls.filter((diningHall) => getOpeningSoonDiningSlot(diningHall) !== null);

  const closedDining = diningHalls.filter((diningHall) => getOpenDiningSlot(diningHall) === null && getOpeningSoonDiningSlot(diningHall) === null);

  return (
    <main className="max-w-3xl mx-auto p-4 mt-10 flex flex-col space-y-4">
      <h2 className="scroll-m-20  pb-2 text-3xl font-bold tracking-tight first:mt-0">
        🍔 Stanford Dining Hours
      </h2>

      <div className="flex flex-col gap-4">
        {openDining.map((diningHall) => (
          <div className="rounded border p-4 flex flex-col gap-2">
            <div className="flex flex-row justify-between">
              <h3 className="font-semibold text-base">{diningHall.name}</h3>
              <span className="text-sm text-lime-600 font-semibold text-right">
                {getOpenDiningSlot(diningHall)?.name} open until {getOpenDiningSlot(diningHall)?.endTime}
              </span>
            </div>
          </div>))}

        {openDining.length === 0 && (
          <div className="flex w-full items-center justify-center p-4">
            <h3 className="italic text-base">All dining halls are closed</h3>
          </div>
        )}

        <hr className="border-neutral-200" />


        {
          openingSoonDining.map((diningHall) => (
            <div className="rounded border p-4 flex flex-col gap-2">
              <div className="flex flex-row justify-between">
                <h3 className="font-semibold text-base">{diningHall.name}</h3>
                <span className="text-sm text-yellow-600 font-semibold text-right">
                  {getOpeningSoonDiningSlot(diningHall)?.name} opening soon at {getOpeningSoonDiningSlot(diningHall)?.startTime}
                </span>
              </div>
            </div>
          ))
        }


        {openingSoonDining.length > 0 && (
          <hr className="border-neutral-200" />
        )}

        {closedDining.map((diningHall) => (
          <div className="rounded border p-4 flex flex-col gap-2">
            <div className="flex flex-row justify-between">
              <h3 className="font-semibold text-base">{diningHall.name}</h3>
              <span className="text-sm text-red-600 font-semibold text-right">Closed</span>
            </div>
          </div>))}
      </div>

      <div className="w-full text-center text-sm pt-4">
        stanf.org is a set of tools for stanford students. more coming soon!
      </div>
    </main>
  );
}
