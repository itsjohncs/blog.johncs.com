"use client";

import React, { ReactNode } from "react";
import { Highlight, Prism } from "prism-react-renderer";

(typeof global !== "undefined" ? global : window).Prism = Prism;
require("prismjs/components/prism-bash");

import styles from "./CodeBlock.module.scss";
import except from "../utils/except";

interface CodeBlockProps {
    children?: ReactNode;
    className?: string;
}

export function CodeBlock({ children }: CodeBlockProps) {
    return <div className={styles.codeBlock}>{children}</div>;
}

/**
 * Either inline code or the body of a block.
 */
export function CodeBlockBody({ children, className }: CodeBlockProps) {
    if (!className || typeof children !== "string") {
        return <code className={styles.codeBlockBody}>{children}</code>;
    }

    const language = className.replace(/language-/gm, "");

    return (
        <Highlight code={children.trimEnd()} language={language}>
            {function ({ tokens, getLineProps, getTokenProps }) {
                return (
                    <code className={styles.codeBlockBody}>
                        {tokens.map(function (line, i) {
                            return (
                                <div
                                    key={i}
                                    {...except(getLineProps({ line }), [
                                        "style",
                                    ])}
                                >
                                    {line.map(function (token, key) {
                                        return (
                                            <span
                                                key={key}
                                                {...except(
                                                    getTokenProps({ token }),
                                                    ["style"],
                                                )}
                                            />
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </code>
                );
            }}
        </Highlight>
    );
}
