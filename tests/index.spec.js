import React from 'react';
import reactToHtml from '../index.js';

function ReactComponent() {
    return (
        <div className="react-component">React Component</div>
    );
}

const htmlString = '<div class="react-component">React Component</div>';

describe('React to HTML', () => {
    it('should convert a React component to HTML', () => {
        
        const story = () => <ReactComponent />;

        const html = reactToHtml(story);

        expect(html).toEqual(htmlString);
    });
});