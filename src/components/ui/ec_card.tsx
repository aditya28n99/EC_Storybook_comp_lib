import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

import { Button } from './button'

const EC_CardVariants = cva(
    "rounded-md overflow-hidden transition-transform border-2 font-dm-sans",
    {
        variants: {
            variant: {
                default: "bg-white text-black",

            },
            size: {
                small: "p-2",
                medium: "p-4",
                large: "p-6",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "medium",
        },
    }
);

// Define the types for card props
export interface EC_CardProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof EC_CardVariants> {
    title?: string;
    subtitle?: string;
    projects?: string;
    // contributorImage1?: string; //as I currently adding the url here. if needed we can use React.ReactNode; for the react element.
    // contributorImage2?: string;
    // contributorImage3?: string;
    contributorImages?: string[]; //Instade of individual images will add the Array of image URLs
    contributorCount: number;
    features?: string;
    postCount?: string;
    eventCount?: number;
    projectCount?: number;
    resourceCount?: number;
}

// Card component definition
const EC_Card: React.FC<EC_CardProps> = ({
    variant,
    size,
    title,
    subtitle,
    projects,
    contributorImages,
    contributorCount,
    features,
    postCount,
    eventCount,
    projectCount,
    resourceCount,
    ...props
}) => {

    return (
        <>
            <div
                className={cn(EC_CardVariants({ variant, size }))}
                {...props}
            >
                <div className="flex">
                    {/* empty container bar */}
                    <div className="w-2 rounded-md bg-blue-400 mr-4"></div>
    
                    {/* Content container */}
                    <div className="flex-1 flex justify-between p-2">
                        <div>
                            {title && <h2 className="text-3xl font-bold text-gray-600 font-dm-sans mb-2">{title}</h2>}
                            {subtitle && <h2 className="text-3xl font-light text-gray-500 font-dm-sans mb-2">{subtitle}</h2>}
                            {projects && (
                                <div className="flex items-center mb-2">
                                    <h2 className="text-2xl font-light text-green-500 font-dm-sans mb-2 mr-2">Project By:</h2>
                                    <div className="flex space-x-2">
                                        {contributorImages?.map((image, i) => (
                                            <img
                                                key={i}
                                                src={image}
                                                alt="Contributor image"
                                                className="w-8 h-8 rounded-full object-cover"
                                            />
                                        ))}
                                    </div>
                                    <h2 className="text-xl font-dm-sans mb-2 ml-2">+{contributorCount} Contributors</h2>
                                </div>
                            )}
                            {features && (
                                <div className="flex">
                                    <span className="separator-line flex items-center mr-2">
                                        <div className="flex flex-col items-center">
                                            <h2 className="text-xl font-dm-sans mb-1">{postCount}</h2>
                                            <h2 className="text-xl font-dm-sans mb-1">Posts</h2>
                                        </div>
                                    </span>
                                    <span className="separator-line flex items-center mr-2">
                                        <div className="flex flex-col items-center">
                                            <h2 className="text-xl font-dm-sans mb-1">{eventCount}</h2>
                                            <h2 className="text-xl font-dm-sans mb-1">Events</h2>
                                        </div>
                                    </span>
                                    <span className="separator-line flex items-center mr-2">
                                        <div className="flex flex-col items-center">
                                            <h2 className="text-xl font-dm-sans mb-1">{projectCount}</h2>
                                            <h2 className="text-xl font-dm-sans mb-1">Projects</h2>
                                        </div>
                                    </span>
                                    <span className="flex flex-col items-center mr-2">
                                        <div className="flex flex-col items-center">
                                            <h2 className="text-xl font-dm-sans mb-1">{resourceCount}</h2>
                                            <h2 className="text-xl font-dm-sans mb-1">Resource</h2>
                                        </div>
                                    </span>
                                </div>
                            )}
                        </div>
    
                        <div className="flex-col items-center justify-between">
                            {/* Right-sided container with image and button */}
                            <div className="flex flex-col items-center">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ji0ipjazxzjcYvP0LcFRMvQLv2kUcOZ-qg&s"
                                    alt="Example Image"
                                    className="w-full h-1/3object-cover mb-4"
                                />
                                <Button className="mt-auto">Join Project</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
    
};

EC_Card.displayName = "EC_Card";

export { EC_Card, EC_CardVariants };
