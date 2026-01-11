"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";
import ReactImageGallery from "react-image-gallery";

type GalleryListProps = {
  id: string;
};
export const GalleryList = ({ id }: GalleryListProps) => {

  const images = [
    {
      original: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      thumbnail: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=150',
      description: 'Fachada principal'
    },
    {
      original: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      thumbnail: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=150',
      description: 'Salón de estar'
    },
    {
      original: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      thumbnail: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=150',
      description: 'Cocina gourmet'
    },
    {
      original: 'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      thumbnail: 'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=150',
      description: 'Dormitorio principal'
    }
  ];
  return (
    <>
      {id &&
        <div className="rounded-[2.5rem] overflow-hidden mb-8 shadow-xl border border-stone-100 bg-stone-50">
          <ReactImageGallery
            items={images}
            showPlayButton={false}
            showFullscreenButton={true}
            slideDuration={450}
            renderLeftNav={(onClick, disabled) => (
              <button className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-orange-600 transition-all" onClick={onClick} disabled={disabled}>
                <ArrowLeft size={24} />
              </button>
            )}
            renderRightNav={(onClick, disabled) => (
              <button className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-orange-600 transition-all" onClick={onClick} disabled={disabled}>
                <ArrowRight size={24} />
              </button>
            )}
          />
        </div>
      }
    </>
  );
};
