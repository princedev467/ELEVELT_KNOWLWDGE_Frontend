import React, { useContext, useEffect, useState } from 'react';
import { useGetBlogQuery, useViewBlogMutation } from '../../Redux/Api/blog.Api';
import { NavLink, useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import { useGetBlogSectionQuery } from '../../Redux/Api/blogSection.Api';
import DOMPurify from 'dompurify';
import { useGetTagQuery } from '../../Redux/Api/tag.Api';
import { useAddblogLikesMutation, useGetblogLikesQuery, useUpdateblogLikesMutation } from '../../Redux/Api/blogLikes.Api';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import SendIcon from '@mui/icons-material/Send';
import { useAddBlogCommentMutation, useGetBlogCommentQuery, useUpdateBlogCommentMutation } from '../../Redux/Api/blogComment.Api';
import { ThemeContext } from '../../context/theme.context';

/* ─── Inline styles ──────────────────────────────────────────────────── */
/* ─── Theme-aware inline styles ─────────────────────────────────── */
const getStyles = (isDark) => `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500&display=swap');

  .bd-root {
    --bg:       ${isDark ? '#0d0f14' : '#f4f6f9'};
    --surface:  ${isDark ? '#13161d' : '#ffffff'};
    --surface2: ${isDark ? '#1a1e28' : '#f1f4f8'};
    --border:   ${isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.09)'};
    --accent:   ${isDark ? '#e8a87c' : '#c76b2e'};
    --accent2:  ${isDark ? '#6c8ef5' : '#4a6fd4'};
    --text:     ${isDark ? '#c9cdd8' : '#4a5568'};
    --muted:    ${isDark ? '#5a5f72' : '#8a94a6'};
    --white:    ${isDark ? '#f0f2f7' : '#1a202c'};
    --radius:   16px;
  }

  .bd-root { font-family: 'DM Sans', sans-serif; background: var(--bg); color: var(--text); min-height: 100vh; }

  /* ── Hero ── */
  .bd-hero {
    position: relative;
    width: 100%;
    height: 480px;
    overflow: hidden;
    border-radius: 0 0 40px 40px;
  }
  .bd-hero img {
    width: 100%; height: 100%;
    object-fit: cover;
    display: block;
    filter: brightness(0.55) saturate(0.8);
    transition: transform 8s ease;
  }
  .bd-hero:hover img { transform: scale(1.04); }
  .bd-hero-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(13,15,20,0.95) 0%, transparent 60%);
    display: flex; align-items: flex-end;
    padding: 40px 48px;
  }
  .bd-hero-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 5vw, 3.4rem);
    font-weight: 900;
    color: var(--white);
    line-height: 1.15;
    max-width: 700px;
    margin: 0;
  }

  /* ── Meta bar ── */
  .bd-meta {
    display: flex; align-items: center; justify-content: space-between;
    flex-wrap: wrap; gap: 16px;
    padding: 20px 48px;
    border-bottom: 1px solid var(--border);
  }
  .bd-author { display: flex; align-items: center; gap: 12px; }
  .bd-author img {
    width: 46px; height: 46px;
    border-radius: 50%; object-fit: cover;
    border: 2px solid var(--accent);
  }
  .bd-author-name { font-weight: 500; color: var(--white); font-size: 15px; line-height: 1.2; }
  .bd-author-role { font-size: 12px; color: var(--muted); }
  .bd-chips { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
  .bd-chip {
    display: flex; align-items: center; gap: 6px;
    padding: 7px 14px; border-radius: 999px;
    font-size: 13px; font-weight: 500; cursor: pointer;
    transition: transform 0.15s, opacity 0.15s;
    border: none; outline: none;
  }
  .bd-chip:hover { transform: translateY(-1px); opacity: 0.85; }
  .bd-chip-date  { background: var(--surface2); color: var(--muted); }
  .bd-chip-read  { background: var(--surface2); color: var(--muted); }
  .bd-chip-like  { background: rgba(232,168,124,0.12); color: var(--accent); }
  .bd-chip-view  { background: rgba(108,142,245,0.12); color: var(--accent2); }

  /* ── Layout ── */
  .bd-layout {
    display: grid;
    grid-template-columns: 1fr 340px;
    gap: 32px;
    max-width: 1280px;
    margin: 40px auto;
    padding: 0 48px 80px;
  }
  @media (max-width: 1024px) {
    .bd-layout { grid-template-columns: 1fr; padding: 0 24px 60px; }
    .bd-meta { padding: 20px 24px; }
    .bd-hero-overlay { padding: 24px; }
  }

  /* ── Card ── */
  .bd-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 36px;
    margin-bottom: 24px;
    transition: border-color 0.2s;
  }
  .bd-card:hover { border-color: rgba(255,255,255,0.13); }

  /* ── Main content prose ── */
  .bd-prose {
    font-size: 17px;
    line-height: 1.9;
    color: var(--text);
  }
  .bd-prose h1, .bd-prose h2, .bd-prose h3 {
    font-family: 'Playfair Display', serif;
    color: var(--white);
  }
  .bd-prose a { color: var(--accent2); text-decoration: none; }
  .bd-prose a:hover { text-decoration: underline; }

  /* ── Section card ── */
  .bd-section-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 36px;
    margin-bottom: 24px;
  }
  .bd-section-title {
    font-family: 'Playfair Display', serif;
    font-size: 26px;
    font-weight: 700;
    color: var(--white);
    margin-bottom: 24px;
  }
  .bd-section-body {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 28px;
    align-items: start;
  }
  @media (max-width: 640px) { .bd-section-body { grid-template-columns: 1fr; } }
  .bd-section-text {
    font-size: 16px; line-height: 1.85; color: var(--text);
    overflow: hidden;
    transition: max-height 0.4s ease;
  }
  .bd-section-img {
    width: 100%; border-radius: 12px;
    object-fit: cover; display: block;
    border: 1px solid var(--border);
  }
  .bd-read-more {
    display: inline-flex; align-items: center; gap: 6px;
    margin-top: 16px; padding: 8px 20px;
    border-radius: 999px;
    background: rgba(108,142,245,0.12);
    color: var(--accent2);
    font-size: 13px; font-weight: 500;
    border: 1px solid rgba(108,142,245,0.25);
    cursor: pointer; transition: background 0.2s, transform 0.15s;
  }
  .bd-read-more:hover { background: rgba(108,142,245,0.22); transform: translateY(-1px); }

  /* ── Divider ── */
  .bd-divider {
    height: 1px; background: var(--border);
    margin: 32px 0;
  }

  /* ── Section label ── */
  .bd-label {
    font-size: 11px; font-weight: 500; letter-spacing: 3px;
    text-transform: uppercase; color: var(--muted);
    margin-bottom: 20px; display: block;
  }

  /* ── Comments ── */
  .bd-comment {
    display: flex; gap: 14px;
    padding: 18px 0;
    border-bottom: 1px solid var(--border);
  }
  .bd-comment:last-of-type { border-bottom: none; }
  .bd-comment-avatar {
    width: 40px; height: 40px; border-radius: 50%;
    object-fit: cover; flex-shrink: 0;
    border: 2px solid var(--border);
  }
  .bd-comment-name { font-weight: 500; color: var(--white); font-size: 14px; }
  .bd-comment-text { font-size: 14px; color: var(--text); margin-top: 4px; line-height: 1.7; }

  .bd-textarea {
    width: 100%;
    background: var(--surface2);
    border: 1px solid var(--border);
    border-radius: 10px;
    color: var(--white);
    font-size: 15px;
    font-family: 'DM Sans', sans-serif;
    padding: 14px 16px;
    resize: vertical;
    min-height: 100px;
    outline: none;
    transition: border-color 0.2s;
    box-sizing: border-box;
  }
  .bd-textarea:focus { border-color: var(--accent2); }
  .bd-textarea::placeholder { color: var(--muted); }

  .bd-submit {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 10px 22px; border-radius: 999px;
    background: var(--accent2);
    color: #fff; font-size: 14px; font-weight: 500;
    border: none; cursor: pointer;
    transition: opacity 0.2s, transform 0.15s;
    font-family: 'DM Sans', sans-serif;
  }
  .bd-submit:hover { opacity: 0.88; transform: translateY(-1px); }

  /* ── Sidebar ── */
  .bd-sidebar-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 28px;
    margin-bottom: 20px;
  }
  .bd-related-item {
    display: flex; gap: 14px; align-items: flex-start;
    padding: 14px 0;
    border-bottom: 1px solid var(--border);
    text-decoration: none;
    transition: opacity 0.15s;
  }
  .bd-related-item:last-child { border-bottom: none; }
  .bd-related-item:hover { opacity: 0.75; }
  .bd-related-thumb {
    width: 76px; height: 58px;
    border-radius: 8px; object-fit: cover;
    flex-shrink: 0; border: 1px solid var(--border);
  }
  .bd-related-title { font-size: 13px; font-weight: 500; color: var(--white); line-height: 1.4; margin-bottom: 4px; }
  .bd-related-date  { font-size: 12px; color: var(--muted); }

  /* ── Tags ── */
  .bd-tag {
    display: inline-block;
    padding: 6px 14px; border-radius: 999px;
    font-size: 12px; font-weight: 500;
    background: var(--surface2);
    color: var(--text);
    border: 1px solid var(--border);
    text-decoration: none;
    transition: background 0.15s, color 0.15s, border-color 0.15s;
  }
  .bd-tag:hover {
    background: rgba(232,168,124,0.12);
    color: var(--accent);
    border-color: rgba(232,168,124,0.3);
  }

  /* ── Author card centre ── */
  .bd-author-card { text-align: center; }
  .bd-author-card img {
    width: 80px; height: 80px; border-radius: 50%; object-fit: cover;
    border: 3px solid var(--accent); margin-bottom: 12px;
  }
  .bd-author-card h4 {
    font-family: 'Playfair Display', serif;
    font-size: 20px; color: var(--white); margin: 0 0 4px;
  }
  .bd-author-card p { font-size: 13px; color: var(--muted); margin: 0 0 10px; }
  .bd-author-card span { font-size: 13px; color: var(--text); line-height: 1.6; }

  /* ── No comments ── */
  .bd-empty { color: var(--muted); font-size: 14px; padding: 12px 0; }
`;

function Blog_Detail() {
  const { id } = useParams();
  const themeData = useContext(ThemeContext);
  // UserRouts wraps with class='dark' when theme==='light' (inverted), so visual dark = theme 'light'
  const isVisuallyDark = themeData.theme === 'light';
  const [expandedSections, setExpandedSections] = useState({});
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  // 2. Add your update mutation (add this to your blogComment.Api)
  const [updateComment] = useUpdateBlogCommentMutation();

 const [viewBlogCount] = useViewBlogMutation();

// fire once on page load
useEffect(() => {

  console.log('effect fired');
  if (id) {
    
    viewBlogCount(id);

    console.log('mutation called');
  }


}, [id]);
  // 3. Handler
  const handleEditSave = async (commentId) => {
    await updateComment({ _id: commentId, comment: editText });
    setEditingId(null);
    setEditText('');
  };
  const toggleSection = (sId) =>
    setExpandedSections((prev) => ({ ...prev, [sId]: !prev[sId] }));

  //getdata
  const { data: blog } = useGetBlogQuery();
  const { data: blogSection } = useGetBlogSectionQuery();
  const { data: blogLikes } = useGetblogLikesQuery();
  const { data: blogComment } = useGetBlogCommentQuery();
  const { data: Tag } = useGetTagQuery();
  const auth = useSelector((state) => state.auth);


  //addData
  const [addData] = useAddblogLikesMutation();
  const [addComment] = useAddBlogCommentMutation();


  //update
  const [updateData] = useUpdateblogLikesMutation();

  //getData store in variable 
  const TagData = Tag?.data;

  const filterBlog = blog?.data?.find((v) => v._id === id);

  const filterBlogSection = blogSection?.data?.filter((v) => v?.blog?._id === filterBlog?._id);

  const clean = DOMPurify.sanitize(filterBlog?.text || '');


  const totalWords = (filterBlog?.text?.length || 0) + (filterBlogSection?.reduce((t, s) => t + (s?.description?.length || 0), 0) || 0);
  const readMin = Math.max(1, Math.floor(totalWords / 200));


  const handleLikes = async (blogId) => {

    if (!auth?.auth?._id) return;

    const exist = blogLikes?.data?.find((v) => v?.blog === filterBlog?._id);

    if (!exist) {
      await addData({
        blog: blogId,
        user: auth?.auth?._id,
        likes: 1
      });
    } else {
      await updateData({
        _id: exist._id,
        user: auth?.auth?._id
      });
    }
  };

  const blogLikesCount = blogLikes?.data?.find((v) => v.blog === id);

  const formik = useFormik({
    initialValues: {
      comment: ''
    },
    enableReinitialize: true,
    onSubmit: async (values, { resetForm }) => {
      await addComment({
        user: auth?.auth?._id,
        comment: values.comment,
        blog: filterBlog._id
      });
      resetForm();
    },
  });

  const { handleSubmit, handleChange, handleBlur, values } = formik;

  const filtercomment = blogComment?.data?.filter((v) => v?.blog === filterBlog?._id);

  const myExistingComment = filtercomment?.find((v) => v.user._id === auth?.auth?._id);

  return (
    <>
      <style>{getStyles(isVisuallyDark)}</style>
      <main className="bd-root">

        {/* ── Hero ── */}
        <div className="bd-hero">
          <img src={filterBlog?.content?.[0]?.url} alt={filterBlog?.title} />
          <div className="bd-hero-overlay">
            <h1 className="bd-hero-title">{filterBlog?.title}</h1>
          </div>
        </div>

        {/* ── Meta bar ── */}
        <div className="bd-meta">
          <div className="bd-author">
            <img src="../assets/images/avatar/07.jpg" alt="author" />
            <div>
              <div className="bd-author-name">{filterBlog?.instructor?.name}</div>
              <div className="bd-author-role">Editor at Eduport</div>
            </div>
          </div>

          <div className="bd-chips">
            <span className="bd-chip bd-chip-date">
              <i className="far fa-calendar" />
              {dayjs(filterBlog?.date).format('DD MMM YYYY')}
            </span>
            <span className="bd-chip bd-chip-read">
              <i className="far fa-clock" />
              {readMin} min read
            </span>
            <button
              className="bd-chip bd-chip-like"
              onClick={() => filterBlog?._id && handleLikes(filterBlog._id)}
            >
              <i className="fas fa-heart" />
              {blogLikesCount?.likes ?? 0}
            </button>
            <span className="bd-chip bd-chip-view">
              <i className="far fa-eye" />
              {filterBlog?.views ?? 0}
            </span>
          </div>
        </div>

        {/* ── Two-column layout ── */}
        <div className="bd-layout">

          {/* LEFT — main content */}
          <div>

            {/* Main prose */}
            <div className="bd-card">
              <div
                className="bd-prose"
                dangerouslySetInnerHTML={{ __html: clean }}
              />
            </div>

            {/* Blog sections */}
            {filterBlogSection?.map((section) => {
              const cleanDesc = DOMPurify.sanitize(section?.description || '');
              const isExpanded = expandedSections[section._id];
              return (
                <div className="bd-section-card" key={section._id}>
                  <h2 className="bd-section-title">{section.title}</h2>
                  <div className="bd-section-body">
                    <div>
                      <div
                        className="bd-section-text"
                        style={{ maxHeight: isExpanded ? '9999px' : '200px' }}
                        dangerouslySetInnerHTML={{ __html: cleanDesc }}
                      />
                      <button
                        className="bd-read-more"
                        onClick={() => toggleSection(section._id)}
                      >
                        {isExpanded ? '↑ Show Less' : 'Read More →'}
                      </button>
                    </div>
                    {section?.image?.[0]?.url && (
                      <img
                        className="bd-section-img"
                        src={section.image[0].url}
                        alt={section.title}
                      />
                    )}
                  </div>
                </div>
              );
            })}

            {/* Comments */}
            <div className="bd-card">
              <span className="bd-label">Discussion</span>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: 'var(--white)', marginBottom: 20 }}>
                {filtercomment?.length || 0} Comments
              </div>

              {filtercomment?.length === 0 && (
                <p className="bd-empty">Be the first to leave a comment.</p>
              )}

              {filtercomment?.map((v) => {
                const isMyComment = auth?.auth?._id === v?.user?._id;
                const isEditing = editingId === v._id;

                return (
                  <div className="bd-comment" key={v._id}>
                    <img className="bd-comment-avatar" src="../assets/images/avatar/09.jpg" alt={v.user?.name} />
                    <div style={{ flex: 1 }}>
                      <div className="bd-comment-name">{v.user?.name}</div>

                      {isEditing ? (
                        <>
                          <textarea
                            className="bd-textarea"
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            rows={3}
                            autoFocus
                          />
                          <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
                            <button className="bd-submit" onClick={() => handleEditSave(v._id)}>
                              Save
                            </button>
                            <button
                              className="bd-read-more"
                              onClick={() => setEditingId(null)}
                            >
                              Cancel
                            </button>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="bd-comment-text">{v.comment}</div>
                          {isMyComment && (
                            <button
                              className="bd-read-more"
                              style={{ marginTop: 6 }}
                              onClick={() => {
                                setEditingId(v._id);
                                setEditText(v.comment); // ← pre-fills with current text
                              }}
                            >
                              ✏ Edit
                            </button>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                );
              })}

              <div className="bd-divider" />

              {myExistingComment ? (
                <p style={{ color: 'var(--muted)', fontSize: 14 }}>
                  You have already commented on this post.
                </p>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: 12, fontWeight: 500, color: 'var(--white)', fontSize: 14 }}>
                    Leave a comment
                  </div>
                  <textarea
                    className="bd-textarea"
                    name="comment"
                    placeholder="Share your thoughts…"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.comment}
                    rows={4}
                  />
                  <div style={{ marginTop: 12 }}>
                    <button type="submit" className="bd-submit">
                      <SendIcon sx={{ fontSize: 16 }} />
                      Post Comment
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* RIGHT — sidebar */}
          <aside>

            {/* Author */}
            <div className="bd-sidebar-card">
              <span className="bd-label">About the Author</span>
              <div className="bd-author-card">
                <img src="../assets/images/avatar/07.jpg" alt="author" />
                <h4>{filterBlog?.instructor?.name}</h4>
                <p>Editor at Eduport</p>
                <span>Passionate educator and writer exploring the frontiers of modern learning.</span>
              </div>
            </div>

            {/* Related */}
            <div className="bd-sidebar-card">
              <span className="bd-label">You May Also Like</span>
              {blog?.data
                ?.filter((b) => b._id !== filterBlog?._id)
                ?.slice(0, 3)
                ?.map((item) => (
                  <NavLink
                    key={item._id}
                    to={`/Blog_Detail/${item._id}`}
                    className="bd-related-item"
                  >
                    <img
                      className="bd-related-thumb"
                      src={item?.content?.[0]?.url}
                      alt={item.title}
                    />
                    <div>
                      <div className="bd-related-title">{item.title}</div>
                      <div className="bd-related-date">{dayjs(item.date).format('DD MMM YYYY')}</div>
                    </div>
                  </NavLink>
                ))}
            </div>

            {/* Tags */}
            <div className="bd-sidebar-card">
              <span className="bd-label">Tags</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 4 }}>
                {TagData?.map((tag) => (
                  <NavLink
                    key={tag._id}
                    to={`/Blog_Grid/${tag._id}`}
                    className="bd-tag"
                  >
                    {tag.tag}
                  </NavLink>
                ))}
              </div>
            </div>

          </aside>
        </div>
      </main>
    </>
  );
}

export default Blog_Detail;
