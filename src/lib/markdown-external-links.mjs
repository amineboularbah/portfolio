/** Preserve the site's new-tab convention for links inside Markdown content. */
export default {
  name: 'external-links',
  element: {
    filter: ['a'],
    visit(node, context) {
      if (!/^https?:\/\//.test(node.properties?.href)) return;
      const url = new URL(node.properties.href);
      if (url.hostname !== 'amineboularbah.com') {
        context.setProperty(node, 'target', '_blank');
        context.setProperty(node, 'rel', ['noopener', 'noreferrer']);
      }
    },
  },
};
