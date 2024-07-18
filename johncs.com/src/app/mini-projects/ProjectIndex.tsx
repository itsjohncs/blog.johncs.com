"use client";

import { Heading1 } from "#root/mdx/headings";
import PostHeading from "#root/shared-components/PostHeading";
import allProjects from "./allProjects";

export default function ProjectIndex() {
    return (
        <div className="all-posts">
            <Heading1>All Mini Projects</Heading1>
            {allProjects.map((project, index: number) => (
                <article key={index} className="post">
                    <PostHeading
                        url={project.metadata.url}
                        title={project.metadata.title}
                        date={project.metadata.date}
                        anchorDate={true}
                    />
                    <div className="post-body">
                        <project.default />
                    </div>
                </article>
            ))}
        </div>
    );
}
