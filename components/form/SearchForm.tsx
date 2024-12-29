import React, { useState } from 'react'
import { Button, Card, Label, Select, TextInput } from 'flowbite-react'
import { CalendarDays, MapPin, Users } from 'lucide-react'

const locations = [
  { value: "TAR", label: "Taraba, NG" },
  { value: "LG", label: "Lagos, NG" },
  { value: "ABJ", label: "Abuja, NG" },
  { value: "KN", label: "Kano, NG" },
  { value: "KAD", label: "Kaduna, NG" },
]

const seats = [
  { value: "1", label: "1 Seat" },
  { value: "2", label: "2 Seats" },
  { value: "3", label: "3 Seats" },
  { value: "4", label: "4 Seats" },
]

const SearchForm = () => {
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [date, setDate] = useState('')
  const [numSeats, setNumSeats] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log({ from, to, date, numSeats })
  }

  return (
    <form className="max-w-sm mx-auto bg-secondary rounded-xl" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4 p-4" >
        <h2 className="text-2xl font-bold text-center mb-4">Find Your Ride</h2>
        
        <div>
          <div className="mb-2 block">
            <Label htmlFor="from" value="From" />
          </div>
          <Select
            id="from"
            required
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            icon={MapPin}
          >
            <option value="" disabled>Select departure location</option>
            {locations.map((location) => (
              <option key={location.value} value={location.value}>
                {location.label}
              </option>
            ))}
          </Select>
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="to" value="To" />
          </div>
          <Select
            id="to"
            required
            value={to}
            onChange={(e) => setTo(e.target.value)}
            icon={MapPin}
          >
            <option value="" disabled>Select destination</option>
            {locations.map((location) => (
              <option key={location.value} value={location.value}>
                {location.label}
              </option>
            ))}
          </Select>
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="date" value="Date" />
          </div>
          <TextInput
            id="date"
            type="date"
            icon={CalendarDays}
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="seats" value="Number of Seats" />
          </div>
          <Select
            id="seats"
            required
            value={numSeats}
            onChange={(e) => setNumSeats(e.target.value)}
            icon={Users}
          >
            <option value="" disabled>Select number of seats</option>
            {seats.map((seat) => (
              <option key={seat.value} value={seat.value}>
                {seat.label}
              </option>
            ))}
          </Select>
        </div>

      </div>
        <button className="w-full bg-btn text-white rounded-b-xl py-4">Search Rides</button>
    </form>
  )
}

export default SearchForm

