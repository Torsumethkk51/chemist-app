'use client'
import { useState } from "react"

const startRating = {
    firstname: "",
    lastname: "",
    grade: 1,
    room: 1,
    rating: 0,
    comments: ""
}

export default function RateForm() {
    //firstname lastname grade room rating comments
    const [rating, setRating] = useState({
        firstname: "",
        lastname: "",
        grade: 1,
        room: 1,
        rating: 0,
        comments: ""
    })

    const [formStatusText, SetFormStatusText] = useState(null)

    function onValueChange(event) {
        const { name, value } = event.target

        setRating((prevRating) => {
            return {
                ...prevRating,
                [name]: name === "rating" || name === "grade" || name === "room" ? parseInt(value, 10) : value
            }
        })
    }

    function onFormSubmit(event) {
        event.preventDefault()
        if (rating.firstname === startRating.firstname || rating.lastname === startRating.lastname || rating.comments === startRating.comments) {
            SetFormStatusText(
                <p className="text-xl text-red-600 text-center">ไม่สามารถส่งฟอร์มได้ โปรดกรอกข้อมูลให้ครบ</p>
            )
        }
        else {
            console.log(rating)
            SetFormStatusText(
                <p className="text-xl text-green-400 text-center">ฟอร์มส่งสำเร็จ ขอบคุณสำหรับการประเมิน</p>
            )
            setTimeout(() => {
                SetFormStatusText(null)
            }, 2000)
            setRating(startRating)
        }
    }

    return (
        <form onSubmit={onFormSubmit} className="bg-black/50 max-w-[300px] w-[300px] laptop-l:max-w-[800px] laptop-l:w-[800px] h-[400px] laptop-l:h-[600px] mx-auto px-[18px] laptop-l:px-[35px] space-y-[10px] laptop-l:space-y-[25px] rounded-md">
            <p className="text-[18px] laptop-l:text-3xl font-medium text-center py-6">แบบประเมินเว็บไซต์</p>
            <div className="space-y-[8px] space-x-0 laptop-l:space-x-[18px]">
                <label className="text-[13px] laptop-l:text-xl">ชื่อจริง : </label><input type="text" name="firstname" value={rating.firstname} onChange={onValueChange} className="w-[80%] laptop-l:w-[35%] bg-gray-800 rounded-lg px-4 py-[1px] text-[12px] laptop-l:text-lg" />
                <label className="text-[13px] laptop-l:text-xl">นามสกุล : </label><input type="text" name="lastname" value={rating.lastname} onChange={onValueChange} className="w-[80%] laptop-l:w-[35%] bg-gray-800 rounded-lg px-4 py-[1px] text-[12px] laptop-l:text-lg" />
            </div>
            <label className="text-[13px] laptop-l:text-xl mr-4">ชั้น :</label>
            <select className="w-[75px] laptop-l:w-[35%] bg-gray-800 rounded-lg px-4 py-[1px] text-[12px] laptop-l:text-lg mr-6" name="grade" value={rating.grade} onChange={onValueChange}>
                <option disabled></option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
            </select>
            <label className="text-[13px] laptop-l:text-xl mr-4">ห้อง : </label>
            <select className="w-[75px] laptop-l:w-[35%] bg-gray-800 rounded-lg px-4 py-[1px] text-[12px] laptop-l:text-lg" name="room" value={rating.room} onChange={onValueChange}>
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
            <p className="text-[13px] laptop-l:text-xl mr-4">ความพึงพอใจต่อเว็บไซต์ - <span>ระดับ : {rating.rating}</span></p>
            <div className="flex justify-between items-center space-x-8 px-8">
                <label className="text-[10px] laptop-l:text-xl w-[50px] laptop-l:w-[100px]">น้อยที่สุด</label>
                <input type="range" name="rating" value={rating.rating} onChange={onValueChange} min="0" max="5" className="w-[61px] laptop-l:w-[400px]"/>
                <label className="text-[10px] laptop-l:text-xl w-[50px] laptop-l:w-[100px]">มากที่สุด</label>
            </div>
            <p className="text-[13px] laptop-l:text-xl">ความเห็นต่อเว็บไซต์</p>
            <textarea name="comments" value={rating.comments} onChange={onValueChange} className="bg-gray-800 rounded-lg px-4 py-2 w-full min-h-[45px] max-h-[45px] h-[45px] laptop-l:min-h-[60px] laptop-l:max-h-[60px] laptop-l:h-[60px] text-[12px] laptop-l:text-lg" />
            {formStatusText}
            <button type="submit" className="w-full bg-gray-900 py-[12px] text-[15px] rounded-lg">ส่งแบบประเมิน</button>
        </form>
    )
}