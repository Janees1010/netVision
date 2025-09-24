import React from 'react';

function VideoSection() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-6">Our Business in Action</h2>
        <div className="relative max-w-4xl mx-auto w-full" style={{ paddingTop: '56.25%' }}>
          <video
            src="/video.mp4"
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg object-cover"
            controls
          />
        </div>
      </div>  
    </section>  
  );
}

export default VideoSection;
