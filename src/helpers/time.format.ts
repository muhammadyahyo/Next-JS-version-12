export const calculateEstimatedtimeToRead = (text: string) =>{
    const wpm = 225; // words per minutes
    const words = text.trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm)
    return time
}