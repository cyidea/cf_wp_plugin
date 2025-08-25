/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import metadata from './block.json';
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( metadata.name, {
	edit: ({ attributes, setAttributes }) => {
    const blockProps = useBlockProps();
    return (
      <RichText
        {...blockProps}
        tagName="p"
        value={attributes.content}
        onChange={(newContent) => setAttributes({ content: newContent })}
        placeholder="Enter your custom text here..."
      />
    );
  },
  save: ({ attributes }) => {
    const blockProps = useBlockProps.save();
    return (
      <p {...blockProps}>
        <RichText.Content value={attributes.content} />
      </p>
    );
  },
} );
