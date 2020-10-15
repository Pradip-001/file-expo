import React from 'react'
import { Folder } from './Folder'

export function FileExplorer({ content, depth, ...props }) {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: '248px',
                marginLeft: depth + 'px',
                border: '1px solid red',
                borderRadius: '5px',
            }}
        >
            {Object.keys(content).map(function (key, index) {
                if (typeof content[key] === 'string') {
                    return content[key]
                }

                return (
                    <Folder name={key}>
                        <FileExplorer content={content[key]} depth={depth} />
                    </Folder>
                )
            })}
        </div>
    )
}
