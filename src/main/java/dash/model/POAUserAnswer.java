package dash.model;

import lombok.Data;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Date;


@Entity
@Table(name = "VCOF044_POA_USERANSWER")
@DynamicInsert
@DynamicUpdate
@Data
public class POAUserAnswer {

    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    @Column(name = "COF044_ANSWER_ID", length = 100)
    private String id;

    @Column(name = "COF044_AMOUNT_SUGGESTED")
    private Double amountFinancedSuggested;

    @Column(name="COF044_CREATE_S")
    @Temporal(TemporalType.TIMESTAMP)
    private Date createDate;

}
