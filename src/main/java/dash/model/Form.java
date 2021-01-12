package dash.model;

import lombok.Data;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.time.DateUtils;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

@Entity
@Table(name = "VCOF007_FORM")
@DynamicInsert
@DynamicUpdate
@Data
public class Form {

  @Id
  @Column(name = "COF007_FORM_D", length = 100)
  private String id;

  @Column(name = "COF007_GENDER", length = 20)
  private String gender;

  @Column(name = "COF007_MARITAL_TEXT", length = 200)
  private String maritalText;

  @Column(name = "COF007_IN_COME")
  private Long income;

  @Column(name = "COF007_IN_COME_TEXT", length = 200)
  private String incomeText;

  @Column(name = "COF007_BIRTH")
  @Temporal(TemporalType.TIMESTAMP)
  private Date birthday;

  @Column(name = "COF007_CREATE_S")
  @Temporal(TemporalType.TIMESTAMP)
  private Date createDate = new Date();

  @Column(name = "COF007_LAST_UPDT_S")
  @Temporal(TemporalType.TIMESTAMP)
  private Date updateDate = new Date();

  @Column(name = "COF007_IS_DEL_F")
  private Boolean isDeleted = false;

  @Column(name = "COF007_PROVINCE", length = 100)
  private String province;

  // 总价
  @Column(name = "COF007_ON_THE_ROAD_PRICE", length = 200)
  private String onTheRoadPrice;

  @Column(name = "COF007_DATA_SOURCES")
  private String dataSources;

  @Column(name = "COF007_FOL_STATUS", length = 200)
  private String folStatus;

  @Column(name = "COF007_LOAN_UPDT_S")
  @Temporal(TemporalType.TIMESTAMP)
  private Date loanUpdateDate = new Date();

  // 贷款分类
  @Column(name = "COF007_PLAN_CATEGORY", length = 200)
  private String planCategory;

  @Column(name = "COF007_RSD_C_TEXT", length = 200)
  private String residenceCodeText;

  @Column(name = "COF007_EMPL_LEV", length = 20)
  private String employmentLevel;

  public static void main(String[] args) {

    System.out.print("[");
   /* for (int i = 1; i < 12; i++) {
      System.out.print((int) ( 200+ 800 * Math.random()) + ",");
    }
    System.out.print("]");*/

      System.out.print("[");
      for (int i = 1; i < 11; i++) {
          System.out.print((int) (120*Math.random()) + ",");
      }
      System.out.print("]");

  }

}
