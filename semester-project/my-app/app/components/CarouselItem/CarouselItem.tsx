
import React from "react";
import { GalleryEntry } from "@/app/content";
import PhotoFrame from "@/app/components/PhotoFrame/PhotoFrame";
import "./CarouselItem.css";

interface CarouselItemProps {
    entry: GalleryEntry;
    isActive: boolean;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ entry, isActive }) => {
    return (
        <div className={isActive ? "active-item" : "item"}>
            <PhotoFrame
                location={entry.fields.location}
                date={entry.fields.date}
                imageSrc={entry.fields.photo.fields.file.url}
            />
        </div>
    );
};

export default CarouselItem;
