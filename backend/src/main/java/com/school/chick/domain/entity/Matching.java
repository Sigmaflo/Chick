package com.school.chick.domain.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.*;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.convert.threeten.Jsr310JpaConverters;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor(access= AccessLevel.PUBLIC)
@ApiModel(value = "Mathcing : 매칭 정보", description = "회원의 매칭 정보를 나타낸다")
@Table(name = "Matching")
public class Matching {
    @Id
    @GeneratedValue
    @ApiModelProperty(name = "MAT_ID", value = "매칭 번호")
    private long id;

    private String matGameType;
    private String matStatus;

    @CreatedBy
    @Column(updatable = false)
    private String roomCreateBy;
    @CreatedDate
    @Column(updatable = false)
    @Convert(converter = Jsr310JpaConverters.LocalDateTimeConverter.class)
    private LocalDateTime roomCreateDate;
    @LastModifiedBy
    private String roomUpdateBy;
    @LastModifiedDate
    @Column(nullable = false)
    @Convert(converter = Jsr310JpaConverters.LocalDateTimeConverter.class)
    private LocalDateTime roomUpdateDate;

    @Builder
    public Matching(long id, String matGameType, String matStatus, String roomCreateBy, LocalDateTime roomCreateDate, String roomUpdateBy, LocalDateTime roomUpdateDate) {
        this.id = id;
        this.matGameType = matGameType;
        this.matStatus = matStatus;
        this.roomCreateBy = roomCreateBy;
        this.roomCreateDate = roomCreateDate;
        this.roomUpdateBy = roomUpdateBy;
        this.roomUpdateDate = roomUpdateDate;
    }

    @ManyToOne
    @JoinColumn(name = "ROOM_ID")
    private Room team;
}
