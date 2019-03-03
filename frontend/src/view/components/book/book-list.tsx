import * as React from 'react';
import { Pagination, Card } from '../common';
import { ResData } from '../../../config/api';
import { ROUTE } from '../../../config/route';

interface Props {
    threads:ResData.Thread[];
    paginate:ResData.ThreadPaginate;
}

interface State {
}

export class BookList extends React.Component<Props, State> {
    public render () {
        return <Card className="book-index">
            <Pagination currentPage={this.props.paginate.current_page}
                lastPage={this.props.paginate.total_pages} />
            <div className="thread-form">
                {this.props.threads.map((thread) => this.renderBookItem(thread))}
            </div>
        </Card>;
    }

    public renderBookItem (thread:ResData.Thread) {
        const { attributes, id, author, tags, last_component } = thread;
        return <div className="thread-list" key={id}>
            <a className="title" href={`${window.location.origin}/book/${id}`}>{ attributes.title }</a>
            <div className="biref">{ attributes.brief }</div>
            { last_component &&
                <a className="latest-chapter" href={`${window.location.origin}/book/${id}/chapter/${last_component.id}`}>最新章节: { last_component.attributes.title }</a>
            }
            { tags &&
                <div className="tags">
                    { tags.map((tag, i) => 
                        <a className="tag" key={i} href={`${window.location.origin}/books/?tag=${tag.id}`}>{tag.attributes.tag_name}</a>
                    )}
                </div> 
            }
            <div className="meta">
                <a className="author" href={`${window.location.origin}${ROUTE.users}/${author.id}`}>{author.attributes.name}</a>
                <div className="counters">
                    <span><i className="fas fa-pencil-alt"></i>{attributes.total_char}</span> /
                    <span><i className="fas fa-eye"></i>{attributes.view_count}</span> / 
                    <span><i className="fas fa-comment-alt"></i>{attributes.reply_count}</span> /
                </div>
            </div>
        </div>;
    }
}