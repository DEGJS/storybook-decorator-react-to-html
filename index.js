import {renderToStaticMarkup} from 'react-dom/server';

export default storyFn => renderToStaticMarkup(storyFn());