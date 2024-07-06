'use client'
import { useState } from "react"

const startRating = {
    firstname: "",
    lastname: "",
    grade: 1,
    room: 1,
    rating: 0,
    comments: "",
}

export default function RateForm() {
    //firstname lastname grade room rating comments
    const [rating, setRating] = useState(startRating)

    function onValueChange(event) {
        const { name, value } = event.target

        setRating((prevRating) => {
            return {
                ...prevRating,
                [name]: typeof(value) === String ? value : Number(value)
            }
        })
    }

    function onFormSubmit(event) {
        event.preventDefault()
        console.log(rating)
        setRating(startRating)
    }

    return (
        <form onSubmit={onFormSubmit} className="bg-black/50 max-w-[900px] w-[900px] h-[615px] mx-auto px-12 space-y-8">
            <p className="text-3xl font-medium text-center py-6">แบบประเมินเว็บไซต์</p>
            <div className="space-x-4">
                <label className="text-xl">ชื่อจริง : </label><input type="text" name="firstname" value={rating.firstname} onChange={onValueChange} className="w-[35%] bg-gray-800 rounded-lg px-4 py-1" />
                <label className="text-xl">นามสกุล : </label><input type="text" name="lastname" value={rating.lastname} onChange={onValueChange} className="w-[35%] bg-gray-800 rounded-lg px-4 py-1" />
            </div>
            <label className="text-xl mr-4">ชั้น :</label>
            <select className="w-2/5 bg-gray-800 rounded-lg px-4 py-1 mr-6" name="grade" value={rating.grade} onChange={onValueChange}>
                <option disabled></option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
            </select>
            <label className="text-xl mr-4">ห้อง : </label>
            <select className="w-2/5 bg-gray-800 rounded-lg px-4 py-1" name="room" value={rating.room} onChange={onValueChange}>
                <option disabled></option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
            </select>
            <p className="text-xl mr-4">ความพึงพอใจต่อเว็บไซต์ - <span>ระดับ : {rating.rating}</span></p>
            <div className="flex justify-between items-center space-x-8 px-8">
                <label className="text-lg">น้อยที่สุด</label>
                <input type="range" name="rating" value={rating.rating} onChange={onValueChange} min="0" max="5" className="w-[500px]"/>
                <label className="text-lg">มากที่สุด</label>
            </div>
            <p className="text-xl">ความเห็นต่อเว็บไซต์</p>
            <textarea name="comments" value={rating.comments} onChange={onValueChange} className="bg-gray-800 rounded-lg px-4 py-2 w-full min-h-[75px] max-h-[75px] h-[75px]" />
            <button type="submit" className="w-full bg-gray-900 py-4 text-xl rounded-lg">ส่งแบบประเมิน</button>
        </form>
    )
}